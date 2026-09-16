import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const techBadges = ["Node.js", "React", "MySQL", "Socket.IO", "Stripe", "OpenAI"];

function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 sm:pt-48">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-fade-x opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-accent), transparent)" }}
      />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full border border-border-strong bg-surface px-4 py-1.5 font-mono text-xs tracking-[0.18em] text-muted-foreground">
              SOFTWARE ENGINEER • FULL-STACK • PRODUCT BUILDER
            </span>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Software That Solves{" "}
              <span className="bg-gradient-to-br from-accent to-accent-2 bg-clip-text text-transparent">
                Real Business Problems.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Hi, I'm Zohaib Rana — a Software Engineer specializing in scalable web applications, SaaS
              platforms, business management systems, e-commerce, real-time applications and mobile products.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>

            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <MessageCircle className="size-4" />
              Let's Talk on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="size-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">engineer.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
                <code>
                  <span className="text-accent-2">const</span> engineer = {"{"}
                  {"\n  "}name: <span className="text-accent">"Zohaib Rana"</span>,
                  {"\n  "}role: <span className="text-accent">"Software Engineer"</span>,
                  {"\n  "}builds: [
                  {"\n    "}<span className="text-accent">"SaaS platforms"</span>,
                  {"\n    "}<span className="text-accent">"E-commerce"</span>,
                  {"\n    "}<span className="text-accent">"POS systems"</span>,
                  {"\n    "}<span className="text-accent">"Real-time apps"</span>,
                  {"\n  "}],
                  {"\n  "}status: <span className="text-accent">"Available for projects"</span>,
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
