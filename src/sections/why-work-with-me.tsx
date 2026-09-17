import { motion } from "framer-motion";
import { Blocks, Boxes, Code2, Layers, Plug, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Business-first development",
    description: "Build around actual workflows instead of generic templates.",
    icon: Code2,
  },
  {
    title: "Full-stack capability",
    description: "Frontend, backend, databases, APIs and integrations under one roof.",
    icon: Layers,
  },
  {
    title: "Real product experience",
    description: "Shipped, production projects — not concept-only designs.",
    icon: Boxes,
  },
  {
    title: "Scalable architecture",
    description: "Experience with SaaS, multi-tenancy, RBAC and real-time systems.",
    icon: Blocks,
  },
  {
    title: "Integration experience",
    description: "Payments, messaging, AI, maps, notifications and third-party APIs.",
    icon: Plug,
  },
  {
    title: "Long-term mindset",
    description: "Systems built to evolve as the business grows.",
    icon: TrendingUp,
  },
];

function WhyWorkWithMe() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">WHY ZOBIX</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Businesses Choose Zobix.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <reason.icon className="size-5 text-accent" />
              <h3 className="mt-4 font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WhyWorkWithMe };
