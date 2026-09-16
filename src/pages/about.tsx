import { Seo } from "@/components/seo/seo";
import { education, experience } from "@/data/experience";
import { About as AboutSection } from "@/sections/about";
import { Process } from "@/sections/process";
import { Skills } from "@/sections/skills";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div className="pb-24 pt-36 sm:pt-44">
      <Seo
        title="About"
        description="Learn more about Zohaib Rana — Software Engineer specializing in scalable web, mobile and business software, and the background behind Zobix Solutions."
        path="/about"
      />

      <AboutSection headingLevel="h1" />
      <Skills />

      <section className="border-t border-border bg-surface/30 py-24 sm:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs tracking-[0.18em] text-accent">EXPERIENCE</span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Career Timeline.
              </h2>
            </motion.div>

            <div className="space-y-6">
              {experience.map((entry) => (
                <div key={entry.company} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{entry.company}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
                  </div>
                  <p className="text-sm text-accent">{entry.role}</p>
                  <ul className="mt-3 space-y-1.5">
                    {entry.work.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">EDUCATION</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Background.</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {education.map((entry) => (
              <div key={entry.degree} className="rounded-xl border border-border bg-card p-5">
                <p className="font-medium text-foreground">{entry.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">{entry.institution}</p>
                <p className="mt-2 font-mono text-xs text-accent">{entry.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
    </div>
  );
}

export { AboutPage };
