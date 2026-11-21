import styles from "./SkipLink.module.css";

/** First focusable element: lets keyboard users jump past the navigation. */
export function SkipLink() {
  return (
    <a className={styles.skip} href="#main">
      Skip to content
    </a>
  );
}
