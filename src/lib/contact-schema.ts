import { z } from "zod";

export const projectTypes = [
  "Website",
  "E-commerce",
  "POS",
  "Business Software",
  "SaaS",
  "Mobile App",
  "AI Application",
  "Custom Software",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional().or(z.literal("")),
  company: z.string().trim().optional().or(z.literal("")),
  projectType: z.enum(projectTypes, {
    error: "Please select a project type.",
  }),
  budget: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(20, "Please share a few more details about your project."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
