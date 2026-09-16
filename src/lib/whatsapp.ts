import { siteConfig } from "@/config/site";

export function createWhatsAppLink(message?: string, number: string = siteConfig.whatsapp) {
  const digits = number.replace(/[^\d]/g, "");
  const text = message ?? "Hi Zohaib, I visited your portfolio and would like to discuss a software project.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function createMailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${siteConfig.email}${query ? `?${query}` : ""}`;
}
