"use client";

import { useRef } from "react";
import Image from "next/image";
import { about } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import styles from "./Tagline.module.css";

/**
 * Large statement where words light up one by one while you scroll (scrubbed).
 * The sentence is split into <span>s in the markup, so search engines
 * still read it as one sentence and screen readers get the full aria-label.
 */
export function Tagline() {
  const text = about.tagline;
  const words = text.split(/\s+/);
  const root = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;
      gsap.fromTo(
        gsap.utils.toArray("[data-w]", root.current),
        { opacity: 0.3 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.15,
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section className={styles.tagline} aria-label="What drives me">
      {/* Faded desk photo on the right, decorative only */}
      <Image
        className={styles.bg}
        src={about.image.src}
        width={about.image.width}
        height={about.image.height}
        alt=""
        aria-hidden="true"
        data-par="30"
      />
      <Container>
        <p ref={root} className={styles.text} aria-label={text}>
          {words.map((w, i) => (
            <span key={i} data-w="" aria-hidden="true">
              {w}{" "}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
