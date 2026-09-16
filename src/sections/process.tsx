import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "Understand the business, users, goals and requirements." },
  { number: "02", title: "Plan", description: "Define architecture, features, database, APIs and development roadmap." },
  { number: "03", title: "Build", description: "Develop frontend, backend, integrations and business workflows." },
  { number: "04", title: "Test", description: "Validate functionality, security, performance, responsiveness and edge cases." },
  { number: "05", title: "Deploy", description: "Prepare production infrastructure and deploy the application." },
  { number: "06", title: "Improve", description: "Maintain, optimize and expand the product as requirements evolve." },
];

function Process() {
  return (
    <section id="process" className="border-t border-border bg-surface/30 py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">PROCESS</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            How a Project Comes Together.
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute left-0 right-0 top-[27px] h-px bg-border" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative"
              >
                <div className="relative z-10 flex size-[54px] items-center justify-center rounded-full border border-border-strong bg-surface font-mono text-sm text-accent">
                  {step.number}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Process };
