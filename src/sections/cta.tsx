import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a Business Problem That Software Can Solve?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell me what you're trying to build, improve or automate. We'll discuss the requirements, technical
            approach and next steps.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp Me
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="size-4" />
                Send an Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { CTA };
