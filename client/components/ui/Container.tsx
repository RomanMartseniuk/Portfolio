import type { ReactNode } from "react";
import styles from "./Container.module.css";

/** Centered, padded page column. Every section content sits inside one. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
