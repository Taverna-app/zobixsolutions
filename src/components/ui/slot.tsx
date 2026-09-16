import * as React from "react";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/** Minimal `asChild` helper: merges props/className onto its single child element. */
function Slot({ children, className, ...props }: SlotProps) {
  if (!React.isValidElement(children)) return null;

  const child = children as React.ReactElement<Record<string, unknown>>;
  const childClassName = child.props.className as string | undefined;

  return React.cloneElement(child, {
    ...props,
    className: [childClassName, className].filter(Boolean).join(" "),
  });
}

export { Slot };
