import { ProjectLightbox } from "@/components/project/project-lightbox";
import type { ProjectScreenshot } from "@/data/projects";
import { ImageOff, ZoomIn } from "lucide-react";
import { useState } from "react";

interface ProjectGalleryProps {
  screenshots: ProjectScreenshot[];
  projectTitle: string;
}

function ProjectGallery({ screenshots, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());

  if (screenshots.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border-strong bg-surface/40 p-10 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          Screenshots for {projectTitle} are being prepared and will be added here.
        </p>
      </div>
    );
  }

  const markFailed = (src: string) => {
    setFailedSrcs((prev) => {
      if (prev.has(src)) return prev;
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => {
          const failed = failedSrcs.has(screenshot.src);

          if (failed) {
            return (
              <div
                key={screenshot.src}
                className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border-strong bg-surface/40 text-center"
              >
                <ImageOff className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">{screenshot.title}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">Screenshot coming soon</p>
                </div>
              </div>
            );
          }

          return (
            <button
              key={screenshot.src}
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-xl border border-border text-left"
            >
              <img
                src={screenshot.src}
                alt={`${projectTitle} — ${screenshot.title} screenshot`}
                loading="lazy"
                onError={() => markFailed(screenshot.src)}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  <ZoomIn className="size-4" />
                  {screenshot.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <ProjectLightbox
        screenshots={screenshots}
        projectTitle={projectTitle}
        index={activeIndex}
        onClose={() => setActiveIndex(-1)}
        onIndexChange={setActiveIndex}
      />
    </>
  );
}

export { ProjectGallery };
