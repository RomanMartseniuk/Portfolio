import type { ReactNode } from "react";
import styles from "./SectionTitle.module.css";

/** The big h2 used by every section. `sub` is the smaller variant for sub blocks (e.g. Education). */
export function SectionTitle({
  id,
  variant = "section",
  children,
}: {
  id?: string;
  variant?: "section" | "sub";
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      data-reveal=""
      className={variant === "sub" ? styles.sub : styles.title}
    >
      {children}
    </h2>
  );
}
