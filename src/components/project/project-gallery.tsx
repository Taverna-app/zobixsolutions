import { ProjectLightbox } from "@/components/project/project-lightbox";
import type { ProjectScreenshot } from "@/data/projects";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

interface ProjectGalleryProps {
  screenshots: ProjectScreenshot[];
  projectTitle: string;
}

function ProjectGallery({ screenshots, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  if (screenshots.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border-strong bg-surface/40 p-10 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          Screenshots for {projectTitle} are being prepared and will be added here.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden rounded-xl border border-border text-left"
          >
            <img
              src={screenshot.src}
              alt={screenshot.title}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                <ZoomIn className="size-4" />
                {screenshot.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      <ProjectLightbox
        screenshots={screenshots}
        index={activeIndex}
        onClose={() => setActiveIndex(-1)}
        onIndexChange={setActiveIndex}
      />
    </>
  );
}

export { ProjectGallery };
