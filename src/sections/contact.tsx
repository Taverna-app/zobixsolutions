import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";

interface ContactProps {
  showHeading?: boolean;
}

function Contact({ showHeading = true }: ContactProps) {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {showHeading && (
              <>
                <span className="font-mono text-xs tracking-[0.18em] text-accent">CONTACT</span>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let's Talk About Your Project.
                </h2>
              </>
            )}
            <p className="mt-4 max-w-sm text-muted-foreground">
              Fill out the form or reach out directly — I typically respond within a day.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
              >
                <span className="flex size-10 items-center justify-center rounded-lg border border-border-strong bg-surface-2">
                  <Mail className="size-4 text-accent" />
                </span>
                {siteConfig.email}
              </a>
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
              >
                <span className="flex size-10 items-center justify-center rounded-lg border border-border-strong bg-surface-2">
                  <MessageCircle className="size-4 text-accent" />
                </span>
                {siteConfig.phoneDisplay}
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex size-10 items-center justify-center rounded-lg border border-border-strong bg-surface-2">
                  <MapPin className="size-4 text-accent" />
                </span>
                {siteConfig.location}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Contact };
