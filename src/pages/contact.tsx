import { Seo } from "@/components/seo/seo";
import { Contact as ContactSection } from "@/sections/contact";

function ContactPage() {
  return (
    <div className="pb-4 pt-36 sm:pt-44">
      <Seo
        title="Contact"
        description="Start a software project with Zohaib Rana — get in touch via the contact form, email or WhatsApp to discuss your requirements."
        path="/contact"
      />

      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">GET IN TOUCH</span>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Start a Project.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tell me about what you're building. I'll get back to you to discuss requirements, approach and
            timeline.
          </p>
        </div>
      </div>

      <ContactSection showHeading={false} />
    </div>
  );
}

export { ContactPage };
