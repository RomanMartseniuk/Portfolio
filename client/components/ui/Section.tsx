import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  /** Big outlined number in the corner, e.g. "01" */
  number: string;
  kicker: string;
  title: string;
  children: ReactNode;
  /** Decorative layer(s) rendered behind the content */
  background?: ReactNode;
  /** Hide decor that sticks out of the section (needed for rotated / oversized SVGs) */
  clip?: boolean;
  /** Remove the top padding when the previous section already provides spacing */
  flushTop?: boolean;
  /** Thin line on top of the section */
  bordered?: boolean;
};

/**
 * Standard page section: number, kicker, title, then free content.
 * Used by About, Experience, Stack, Projects and Contact so they stay consistent.
 */
export function Section({
  id,
  number,
  kicker,
  title,
  children,
  background,
  clip = false,
  flushTop = false,
  bordered = false,
}: SectionProps) {
  const headingId = `h-${id}`;
  const classes = [
    styles.sec,
    clip && styles.clip,
    flushTop && styles.flushTop,
    bordered && styles.bordered,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} aria-labelledby={headingId} className={classes}>
      {background}
      <Container>
        <span className={styles.num} aria-hidden="true" data-par="16">
          {number}
        </span>
        <p className={styles.kicker} data-reveal="">
          {kicker}
        </p>
        <SectionTitle id={headingId}>{title}</SectionTitle>
        {children}
      </Container>
    </section>
  );
}
