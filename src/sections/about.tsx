import { motion } from "framer-motion";

const focusAreas = [
  "Backend systems",
  "Frontend applications",
  "Mobile applications",
  "SaaS",
  "Business software",
  "E-commerce",
  "POS",
  "Real-time communication",
  "AI-powered systems",
  "Payments",
  "Third-party integrations",
];

interface AboutProps {
  headingLevel?: "h1" | "h2";
}

function About({ headingLevel = "h2" }: AboutProps) {
  const Heading = headingLevel;

  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs tracking-[0.18em] text-accent">ABOUT</span>
            <Heading className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering Products, Not Just Pages.
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-5 text-muted-foreground"
          >
            <p className="leading-relaxed">
              I'm Zohaib Rana, a software engineer based in Karachi, Pakistan. Over the past several years I've
              worked across the full stack — building backend systems, frontend applications and mobile products
              for real businesses, not just prototypes.
            </p>
            <p className="leading-relaxed">
              My work spans SaaS platforms, business management software, e-commerce, point-of-sale systems,
              real-time communication tools and AI-powered applications, usually involving payments and
              third-party integrations along the way.
            </p>
            <p className="leading-relaxed">
              I care about understanding the business problem first — the code comes after the workflow makes
              sense.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { About };
