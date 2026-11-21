"use client";

import { useRef } from "react";
import { EASE, gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import styles from "./Rotator.module.css";

/**
 * Cycles through short phrases ("clean interfaces", "React frontends", ...).
 * All phrases are in the HTML (good for SEO and screen readers); the first one
 * is visible and GSAP slides the others in and out every 2.6s.
 */
export function Rotator({ phrases }: { phrases: readonly string[] }) {
  const root = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;
      const words = gsap.utils.toArray<HTMLElement>("span", root.current);
      if (words.length < 2) return;

      let index = 0;
      gsap.set(words.slice(1), { yPercent: 100, opacity: 0 });

      const timer = window.setInterval(() => {
        const out = words[index];
        index = (index + 1) % words.length;
        const next = words[index];
        gsap.to(out, { yPercent: -100, opacity: 0, duration: 0.6, ease: "power3.in" });
        gsap.fromTo(
          next,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.7, ease: EASE, delay: 0.15 },
        );
      }, 2600);

      return () => window.clearInterval(timer);
    },
    { scope: root },
  );

  return (
    <span ref={root} className={styles.rot}>
      {phrases.map((p) => (
        <span key={p}>{p}</span>
      ))}
    </span>
  );
}
