"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

/**
 * Floating navigation pill.
 * - scroll spy: an IntersectionObserver finds the section in the middle of the screen
 * - an accent underline slides under the active link
 * - below 768px the links move into <MobileMenu />
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState("top");
  const linksRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  /* ---------- Scroll spy ---------- */
  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    // A section counts as "current" when it crosses a thin band around the viewport middle
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* ---------- Sliding indicator ---------- */
  useEffect(() => {
    const place = () => {
      const ind = indicatorRef.current;
      const active = linksRef.current?.querySelector<HTMLElement>(
        `[data-sec="${current}"]`,
      );
      if (!ind) return;
      if (!active) {
        ind.style.transform = "translateX(0) scaleX(0)";
        return;
      }
      // The indicator is 100px wide by default, so scale it to the link width
      ind.style.transform = `translateX(${active.offsetLeft}px) scaleX(${active.offsetWidth / 100})`;
    };

    place();
    window.addEventListener("resize", place);
    // Fonts change link widths, so measure again when they finish loading
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [current]);

  /* ---------- Mobile menu: lock scroll + close on Escape ---------- */
  useEffect(() => {
    document.documentElement.classList.toggle("lock", menuOpen);
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("lock");
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.nav}>
        <div className={styles.inner}>
          <a className={styles.logo} href="#top" aria-label="Roman Martseniuk, back to top">
            Roman<span>.</span>
          </a>

          <nav ref={linksRef} className={styles.links} aria-label="Main">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-sec={item.id}
                className={current === item.id ? styles.on : undefined}
              >
                {item.label}
              </a>
            ))}
            <span ref={indicatorRef} className={styles.indicator} />
          </nav>

          <Button className={styles.cta} size="sm" href="#contact">
            Contact me
          </Button>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-controls="menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span>
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
