import { skillGroups } from "@/data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">TECHNICAL EXPERTISE</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Technologies We Use to Build Real Products.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-mono text-xs tracking-wide text-accent">{group.group.toUpperCase()}</h3>
              <ul className="mt-4 space-y-3.5">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.context}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Skills };
