"use client";

import { useRef } from "react";
import type { TimelineEntry } from "@/data/experience";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { TimelineItem } from "./TimelineItem";
import styles from "./Timeline.module.css";

/**
 * Vertical timeline. The coral line "draws" itself as the list scrolls through the screen.
 * Used twice: for work experience and for education.
 */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current || !fill.current) return;
      gsap.fromTo(
        fill.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <div ref={root} className={styles.tl}>
      <div className={styles.line} aria-hidden="true">
        <i ref={fill} />
      </div>
      {entries.map((entry) => (
        <TimelineItem key={`${entry.org}-${entry.period}`} entry={entry} />
      ))}
    </div>
  );
}
