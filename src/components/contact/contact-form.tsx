import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, projectTypes, type ContactFormValues } from "@/lib/contact-schema";
import { submitContactForm } from "@/lib/contact";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Status = "idle" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("idle");
    try {
      await submitContactForm(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your full name" aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" placeholder="+92 3XX XXXXXXX" {...register("phone")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" placeholder="Company or brand name" {...register("company")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="projectType">Project Type</Label>
          <Select id="projectType" aria-invalid={!!errors.projectType} defaultValue="" {...register("projectType")}>
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          {errors.projectType && <p className="text-xs text-destructive">{errors.projectType.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="budget">Budget (optional)</Label>
          <Input id="budget" placeholder="Approximate budget" {...register("budget")} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project, timeline and goals."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-accent">
          <CheckCircle2 className="size-4" />
          Thanks! Your message has been received. I'll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-destructive">
          <XCircle className="size-4" />
          Something went wrong. Please try{" "}
          <a href={createWhatsAppLink()} target="_blank" rel="noreferrer" className="underline">
            WhatsApp
          </a>{" "}
          or email instead.
        </p>
      )}
    </form>
  );
}

export { ContactForm };
