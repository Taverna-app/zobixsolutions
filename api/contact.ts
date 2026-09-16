import type { VercelRequest, VercelResponse } from "@vercel/node";
import { contactSchema } from "../src/lib/contact-schema";

const TO_EMAIL = "ranadeveloperoffical@gmail.com";

async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_NAME } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error("SMTP is not configured.");
  }

  const { default: nodemailer } = await import("nodemailer");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const { name, email, phone, company, projectType, budget, message } = data;
  const fromName = SMTP_FROM_NAME || "Zobix Solutions";

  await transporter.sendMail({
    from: `"${fromName}" <${SMTP_USER}>`,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New project inquiry from ${name} (${projectType})`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      `Project type: ${projectType}`,
      budget ? `Budget: ${budget}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid submission." });
    }

    await sendContactEmail(parsed.data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact form error:", err);
    return res.status(502).json({ error: "Failed to send message." });
  }
}
