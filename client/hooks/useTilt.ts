"use client";

import { type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

/**
 * 3D tilt toward the pointer for cards and framed images.
 * @param max maximum rotation in degrees
 */
export function useTilt<T extends HTMLElement>(
  ref: RefObject<T | null>,
  max = 8,
) {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion() || !hasFinePointer()) return;

      const rX = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
      const rY = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });
      gsap.set(el, { transformPerspective: 900 });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        rY(((e.clientX - r.left) / r.width - 0.5) * max);
        rX(-((e.clientY - r.top) / r.height - 0.5) * max);
      };
      const onLeave = () => {
        rX(0);
        rY(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { dependencies: [max] },
  );
}
