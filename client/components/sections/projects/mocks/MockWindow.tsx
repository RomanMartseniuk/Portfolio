import type { ReactNode } from "react";
import styles from "./MockWindow.module.css";

/** Fake app window (three dots + content). Frame for the CSS-drawn project previews. */
export function MockWindow({ children }: { children: ReactNode }) {
  return (
    <div className={styles.mock} aria-hidden="true">
      <div className={styles.bar}>
        <i />
        <i />
        <i />
      </div>
      {children}
    </div>
  );
}
