import { ProjectGallery } from "@/components/project/project-gallery";
import { Seo } from "@/components/seo/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getProjectBySlug, projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Navigate, useParams, Link } from "react-router-dom";

function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pb-24 pt-36 sm:pt-44">
      <Seo
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Projects", item: `${siteConfig.url}/projects` },
            { "@type": "ListItem", position: 2, name: project.title, item: `${siteConfig.url}/projects/${project.slug}` },
          ],
        }}
      />

      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <div className="mt-6 max-w-3xl">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">{project.category.toUpperCase()}</span>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{project.detailedDescription}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild variant="accent">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            )}
            <Button asChild variant="outline">
              <Link to="/contact">Discuss a Similar Project</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-xs font-mono tracking-[0.18em] text-accent">PROBLEM / OBJECTIVE</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-xs font-mono tracking-[0.18em] text-accent">SOLUTION</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{project.solution}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-xs font-mono tracking-[0.18em] text-accent">KEY FEATURES</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-mono tracking-[0.18em] text-accent">TECHNICAL HIGHLIGHTS</h2>
            <ul className="mt-4 space-y-2.5">
              {project.technicalHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono tracking-[0.18em] text-accent">SCREENSHOTS</h2>
            <span className="text-xs text-muted-foreground">Role: {project.role}</span>
          </div>
          <div className="mt-5">
            <ProjectGallery screenshots={project.screenshots} projectTitle={project.title} />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xs font-mono tracking-[0.18em] text-accent">DELIVERED FUNCTIONALITY</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            {project.title} was delivered as a working, functional system covering the features listed above,
            built with production use in mind rather than as a concept-only design.
          </p>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-accent">NEXT PROJECT</p>
            <p className="mt-2 text-lg font-semibold text-foreground">{nextProject.title}</p>
          </div>
          <Button asChild variant="outline">
            <Link to={`/projects/${nextProject.slug}`}>
              View Case Study
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { ProjectDetails };
