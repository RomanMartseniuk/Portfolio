"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Background parallax. Any element with `data-par="N"` drifts from -N px to +N px
 * while its parent section scrolls through the viewport.
 * Renders nothing; mount it once in the layout.
 */
export function ParallaxController() {
  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.utils.toArray<HTMLElement>("[data-par]").forEach((el) => {
      const depth = parseFloat(el.dataset.par ?? "0");
      gsap.fromTo(
        el,
        { y: -depth },
        {
          y: depth,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
  });

  return null;
}
