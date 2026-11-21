"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

/** Number that counts up from 0 on load. Renders the final value in the HTML for SEO and no-JS. */
export function CountUp({ value, delay = 0.7 }: { value: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const counter = { v: 0 };
    el.textContent = "0";
    gsap.to(counter, {
      v: value,
      duration: 1.6,
      delay,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = String(Math.round(counter.v));
      },
      onComplete: () => {
        el.textContent = String(value);
      },
    });
  });

  return <span ref={ref}>{value}</span>;
}
