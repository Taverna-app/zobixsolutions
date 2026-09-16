import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";

interface ProjectPreviewProps {
  project: Project;
  className?: string;
}

/**
 * Renders the project's first screenshot when available. Real screenshots are
 * dropped into src/assets/projects/<slug>/ later — until then this shows a
 * clearly-labeled placeholder instead of a fabricated image.
 */
function ProjectPreview({ project, className }: ProjectPreviewProps) {
  const screenshot = project.screenshots[0];

  if (screenshot) {
    return (
      <div className={cn("relative overflow-hidden bg-surface-2", className)}>
        <img
          src={screenshot.src}
          alt={screenshot.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-surface-2 to-surface text-center",
        className,
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative flex size-12 items-center justify-center rounded-xl border border-border-strong bg-surface">
        <LayoutDashboard className="size-5 text-accent" />
      </div>
      <div className="relative px-6">
        <p className="font-mono text-sm font-medium text-foreground">{project.title}</p>
        <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground">Screenshots coming soon</p>
      </div>
    </div>
  );
}

export { ProjectPreview };
