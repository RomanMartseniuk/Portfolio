import type { ElementType, ReactNode } from "react";

/**
 * Marks content to fade and rise in when it scrolls into view.
 * It only adds a data attribute, so it stays a server component;
 * the animation itself is driven by <RevealController /> in the layout.
 * For elements that are not rendered by us (e.g. a Button), add `data-reveal` directly.
 */
export function Reveal({
  as: Tag = "div",
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}) {
  return (
    <Tag data-reveal="" className={className} {...rest}>
      {children}
    </Tag>
  );
}
