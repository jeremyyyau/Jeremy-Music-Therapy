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

    // The message is safely stored; notify the site owner by email.
    try {
      await sendContactNotification(data);
    } catch (notifyError) {
      console.error("Contact notification email failed:", notifyError);
    }

    return { success: true };
  });

const OWNER_EMAIL = "jeremyyyau@hotmail.com";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function sendContactNotification(data: ContactFormValues): Promise<void> {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!lovableKey || !resendKey) {
    throw new Error("Email is not configured (missing LOVABLE_API_KEY or RESEND_API_KEY).");
  }

  const html = `
    <h2 style="font-family: Arial, sans-serif;">New enquiry from your website</h2>
    <p style="font-family: Arial, sans-serif;">
      <strong>Name:</strong> ${escapeHtml(data.name)}<br/>
      <strong>Email:</strong> ${escapeHtml(data.email)}<br/>
      <strong>Phone:</strong> ${escapeHtml(data.phone || "—")}<br/>
      <strong>Subject:</strong> ${escapeHtml(data.subject || "—")}
    </p>
    <p style="font-family: Arial, sans-serif; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
  `;

  const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": resendKey,
    },
    body: JSON.stringify({
      from: "Contact Form <onboarding@resend.dev>",
      to: [OWNER_EMAIL],
      reply_to: data.email,
      subject: `Website enquiry: ${data.subject?.trim() || "New message"} — ${data.name}`,
      html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend request failed [${response.status}]: ${body}`);
    throw new Error(`Resend request failed [${response.status}]: ${body}`);
  }
}
