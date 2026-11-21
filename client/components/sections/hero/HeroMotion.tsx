"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Intro animation of the hero. It targets elements by data attributes:
 *  [data-word]        headline words slide up out of their mask
 *  [data-hero]        status, greeting, text, buttons and stats fade in one by one
 *  [data-hero-photo]  portrait scales in
 *  [data-chip]        tech chips pop in last
 * Renders nothing, so the hero itself can stay a server component.
 */
export function HeroMotion() {
  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from("[data-word]", { yPercent: 110, duration: 1, stagger: 0.12 }, 0.1)
      .from("[data-hero]", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.2)
      .from(
        "[data-hero-photo]",
        { scale: 0.85, opacity: 0, duration: 1.2, ease: "expo.out" },
        0.2,
      )
      .from(
        "[data-chip]",
        { scale: 0.6, opacity: 0, duration: 0.7, stagger: 0.12, ease: "back.out(1.6)" },
        0.9,
      );
  });

  return null;
}
