import { Seo } from "@/components/seo/seo";
import { ProjectCard } from "@/components/project/project-card";
import { cn } from "@/lib/utils";
import { projectFilters, projects, type ProjectFilter } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="pb-24 pt-36 sm:pt-44">
      <Seo
        title="Projects"
        description="A collection of production applications built by Zobix Solutions — business software, e-commerce, POS systems, real-time apps and AI-powered software."
        path="/projects"
      />

      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">PROJECTS</span>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Work Built for Real Businesses.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Every project here was built to solve an actual operational or business problem.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border-strong bg-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 text-center text-muted-foreground"
            >
              No projects found.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export { Projects };
