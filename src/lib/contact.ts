import type { ContactFormValues } from "@/lib/contact-schema";

export class ContactSubmissionError extends Error {}

/**
 * Sends the contact form payload to a configured endpoint (VITE_CONTACT_ENDPOINT).
 * Keeping this behind one function means the UI never depends on a specific
 * email/forms provider (Formspree, Resend, a custom API, etc).
 */
export async function submitContactForm(data: ContactFormValues): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (!endpoint) {
    throw new ContactSubmissionError("No contact endpoint configured.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new ContactSubmissionError(`Contact endpoint responded with ${response.status}`);
  }
}
