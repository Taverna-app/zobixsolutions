import { useKeyPress } from "@/hooks/use-key-press";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import type { ProjectScreenshot } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff, X } from "lucide-react";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectLightboxProps {
  screenshots: ProjectScreenshot[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

function ProjectLightbox({ screenshots, index, onClose, onIndexChange }: ProjectLightboxProps) {
  const open = index >= 0;
  const current = open ? screenshots[index] : undefined;
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());
  const currentFailed = current ? failedSrcs.has(current.src) : false;

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % screenshots.length);
  }, [index, screenshots.length, onIndexChange]);

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + screenshots.length) % screenshots.length);
  }, [index, screenshots.length, onIndexChange]);

  useScrollLock(open);
  useKeyPress("Escape", onClose, open);
  useKeyPress("ArrowRight", goNext, open);
  useKeyPress("ArrowLeft", goPrev, open);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <div>
              <p className="text-sm font-medium text-white">{current.title}</p>
              {current.description && <p className="text-xs text-white/60">{current.description}</p>}
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16">
            {screenshots.length > 1 && (
              <button
                onClick={goPrev}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-6"
              >
                <ChevronLeft className="size-5" />
              </button>
            )}

            {currentFailed ? (
              <div className="flex flex-col items-center gap-3 text-center text-white/70">
                <ImageOff className="size-8" />
                <p className="font-mono text-sm">Screenshot coming soon</p>
              </div>
            ) : (
              <motion.img
                key={current.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                src={current.src}
                alt={current.title}
                onError={() =>
                  setFailedSrcs((prev) => {
                    if (prev.has(current.src)) return prev;
                    return new Set(prev).add(current.src);
                  })
                }
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            )}

            {screenshots.length > 1 && (
              <button
                onClick={goNext}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-6"
              >
                <ChevronRight className="size-5" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export { ProjectLightbox };
