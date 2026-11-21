"use client";

import { type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

/**
 * Magnetic hover: the element follows the pointer a little while it is hovered
 * and eases back to its place on leave. Attach to any button or link ref.
 * @param strength how far (0..1) the element moves toward the pointer
 */
export function useMagnetic<T extends HTMLElement>(
  ref: RefObject<T | null>,
  enabled = true,
  strength = 0.3,
) {
  useGSAP(
    () => {
      const el = ref.current;
      if (!enabled || !el || prefersReducedMotion() || !hasFinePointer()) return;

      // quickTo reuses one tween, so it stays cheap on every pointer move
      const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - r.left - r.width / 2) * strength);
        y((e.clientY - r.top - r.height / 2) * strength);
      };
      const onLeave = () => {
        x(0);
        y(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { dependencies: [enabled, strength] },
  );
}

