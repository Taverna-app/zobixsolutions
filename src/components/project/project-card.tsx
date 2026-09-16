import { ProjectPreview } from "@/components/project/project-preview";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong">
      <Link to={`/projects/${project.slug}`} className="block" aria-label={`View case study: ${project.title}`}>
        <ProjectPreview project={project} className="aspect-[16/10] w-full" />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="font-mono text-xs tracking-wide text-accent">{project.category}</p>
          <h3 className="mt-1.5 text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent"
          >
            View Case Study
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Live Demo
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };
