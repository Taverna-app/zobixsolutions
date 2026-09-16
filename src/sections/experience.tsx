import { experience } from "@/data/experience";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface/30 py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">EXPERIENCE</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I've Built Production Systems.
          </h2>
        </div>

        <div className="relative mt-14 max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]" />
          <div className="space-y-10">
            {experience.map((entry, index) => (
              <motion.div
                key={entry.company}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative pl-8 sm:pl-10"
              >
                <span
                  className={`absolute left-0 top-1.5 size-3.5 rounded-full border-2 sm:size-[18px] ${
                    entry.current ? "border-accent bg-accent/20" : "border-border-strong bg-surface"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">{entry.company}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
                </div>
                <p className="text-sm font-medium text-accent">{entry.role}</p>
                {entry.location && <p className="mt-0.5 text-xs text-muted-foreground">{entry.location}</p>}
                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {entry.work.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Experience };
