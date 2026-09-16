import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const offerings = [
  "Professional Websites",
  "Custom E-commerce",
  "POS Systems",
  "Inventory Management",
  "Business Management Software",
  "SaaS Platforms",
  "Mobile Applications",
  "Custom APIs",
  "AI-Powered Applications",
  "Real-Time Applications",
];

function ZobixSolutions() {
  return (
    <section className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 sm:px-14">
          <div
            className="pointer-events-none absolute -top-24 right-[-10%] h-[320px] w-[320px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--color-accent-2), transparent)" }}
          />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs tracking-[0.18em] text-accent">
                {siteConfig.brand.toUpperCase()}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Need More Than a Website?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                {siteConfig.brand} helps businesses turn ideas and operational problems into custom digital
                products.
              </p>
              <Button asChild variant="accent" size="lg" className="mt-8">
                <Link to="/contact">
                  Discuss Your Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="grid grid-cols-2 gap-2.5 self-start"
            >
              {offerings.map((offering) => (
                <div
                  key={offering}
                  className="rounded-lg border border-border bg-background/60 px-3.5 py-3 text-sm text-foreground"
                >
                  {offering}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ZobixSolutions };
