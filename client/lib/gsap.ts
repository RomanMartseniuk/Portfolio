"use client";

/**
 * Single place where GSAP and its plugins are registered.
 * Import `gsap` / `ScrollTrigger` from here, never from "gsap" directly,
 * so the plugin is guaranteed to be registered exactly once.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/** Shared easing used by almost every animation on the page. */
export const EASE = "power3.out";

export { gsap, ScrollTrigger, useGSAP };
