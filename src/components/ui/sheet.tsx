import { useKeyPress } from "@/hooks/use-key-press";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import * as React from "react";
import { createPortal } from "react-dom";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Sheet({ open, onClose, title, children }: SheetProps) {
  useScrollLock(open);
  useKeyPress("Escape", onClose, open);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className={cn(
              "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-border bg-surface p-6",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm tracking-wide text-muted-foreground">{title}</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex size-9 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:bg-surface-2"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-8 flex-1">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export { Sheet };
