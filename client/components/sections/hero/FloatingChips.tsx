"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";
import styles from "./FloatingChips.module.css";

type Chip = { label: string; depth: number; position: "c1" | "c2" | "c3" };

/**
 * Tech chips that float around the portrait and shift with the pointer
 * (each chip has its own depth, so they move at different speeds).
 */
export function FloatingChips({ chips }: { chips: readonly Chip[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !hasFinePointer() || !root.current) return;
      const hero = root.current.closest("section");
      if (!hero) return;

      const movers = gsap.utils.toArray<HTMLElement>("[data-depth]", root.current).map((el) => ({
        x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3" }),
        depth: parseFloat(el.dataset.depth ?? "0"),
      }));

      const onMove = (e: PointerEvent) => {
        // Pointer position relative to the window centre, from -0.5 to 0.5
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        movers.forEach((m) => {
          m.x(nx * m.depth);
          m.y(ny * m.depth);
        });
      };
      hero.addEventListener("pointermove", onMove);
      return () => hero.removeEventListener("pointermove", onMove);
    },
    { scope: root },
  );

  return (
    <div ref={root} className={styles.layer} aria-hidden="true">
      {chips.map((c) => (
        <span
          key={c.label}
          data-chip=""
          data-depth={c.depth}
          className={`${styles.chip} ${styles[c.position]}`}
        >
          {c.label}
        </span>
      ))}
    </div>
  );
}
