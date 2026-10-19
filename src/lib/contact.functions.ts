import { createServerFn } from "@tanstack/react-start";
import { contactFormSchema, type ContactFormValues } from "./contact.schema";
import process from "node:process";

const OWNER_EMAIL = "jeremyyyau@hotmail.com";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function sendContactNotification(data: ContactFormValues): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    throw new Error("Email is not configured (missing RESEND_API_KEY).");
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

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
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

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: ContactFormValues) => {
    const parsed = contactFormSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(parsed.error.errors.map((e) => e.message).join(" "));
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    try {
      await sendContactNotification(data);
    } catch (notifyError) {
      console.error("Contact notification email failed:", notifyError);
      throw notifyError;
    }

    return { success: true };
  });
