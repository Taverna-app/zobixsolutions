import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

interface SelectProps extends React.ComponentProps<"select"> {}

function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(
          "flex h-11 w-full appearance-none rounded-lg border border-border-strong bg-surface px-4 pr-10 text-sm text-foreground transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/40",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}

export { Select };
