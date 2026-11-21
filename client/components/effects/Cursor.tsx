"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";
import styles from "./Cursor.module.css";

/** Selector of elements that make the ring grow when hovered */
const HOT = "a,button,input,textarea,[data-cursor-hot]";

/**
 * Custom cursor: a small dot that follows instantly and a ring that trails it.
 * Rendered only for mouse / trackpad users (the CSS also hides it on touch).
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !hasFinePointer()) return;
    if (!dot.current || !ring.current) return;
    const ringEl = ring.current;

    // Dot is fast, ring is slower, which creates the trailing feel
    const dx = gsap.quickTo(dot.current, "x", { duration: 0.1, ease: "power3" });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.1, ease: "power3" });
    const rx = gsap.quickTo(ringEl, "x", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(ringEl, "y", { duration: 0.5, ease: "power3" });

    const onMove = (e: PointerEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };
    const onOver = (e: PointerEvent) => {
      const hot = (e.target as Element | null)?.closest(HOT);
      ringEl.dataset.hot = hot ? "true" : "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
    };
  });

  return (
    <>
      <div ref={dot} className={`${styles.cur} ${styles.dot}`} aria-hidden="true">
        <i />
      </div>
      <div ref={ring} className={`${styles.cur} ${styles.ring}`} aria-hidden="true">
        <i />
      </div>
    </>
  );
}
