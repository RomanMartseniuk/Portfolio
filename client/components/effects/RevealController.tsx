"use client";

import { EASE, gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Scroll reveal for every element marked with `data-reveal` (see <Reveal />).
 * The animation REPLAYS every time:
 *  - entering from below (scrolling down) rises up,
 *  - entering from above (scrolling up) drops down,
 *  - leaving resets the element so it can play again.
 * Elements that enter together are staggered (ScrollTrigger.batch).
 * Renders nothing; mount it once in the layout.
 */
export function RevealController() {
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 32 });

    const show = (batch: Element[], y: number) =>
      gsap.fromTo(
        batch,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration: 0.8, ease: EASE, stagger: 0.08, overwrite: "auto" },
      );
    const hide = (batch: Element[], y: number) =>
      gsap.to(batch, {
        opacity: 0,
        y,
        duration: 0.45,
        ease: "power2.in",
        stagger: 0.03,
        overwrite: "auto",
      });

    ScrollTrigger.batch(items, {
      start: "top 90%",
      end: "bottom 10%",
      onEnter: (b) => show(b, 40),
      onLeave: (b) => hide(b, -40),
      onEnterBack: (b) => show(b, -40),
      onLeaveBack: (b) => hide(b, 40),
    });
  });

  return null;
}
