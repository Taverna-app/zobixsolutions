import { ProjectCard } from "@/components/project/project-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs tracking-[0.18em] text-accent">FEATURED WORK</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Real Projects, Real Production Systems.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              A selection of platforms delivered end to end — from architecture to production deployment.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { FeaturedProjects };
