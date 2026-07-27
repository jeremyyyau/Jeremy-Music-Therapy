import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { contactFormSchema, type ContactFormValues } from "./contact.schema";

function createServerSupabaseClient() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;

  return createClient<Database>(url, key, {
    auth: { persistSession: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(
          typeof Request !== "undefined" && input instanceof Request ? input.headers : undefined,
        );
        if (init?.headers) {
          new Headers(init.headers).forEach((value, key) => headers.set(key, value));
        }
        // Use the anon role for public contact form submissions.
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: ContactFormValues) => {
    const parsed = contactFormSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(parsed.error.errors.map((e) => e.message).join(" "));
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    const supabase = createServerSupabaseClient();

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject || null,
      message: data.message,
    });

    if (error) {
      console.error("Contact submission failed:", error);
      throw new Error("We couldn't save your message. Please try again in a moment.");
    }

    return { success: true };
  });
