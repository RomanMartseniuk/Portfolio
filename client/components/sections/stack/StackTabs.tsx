"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { SkillGroup } from "@/data/stack";
import { EASE, gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { StackTile } from "./StackTile";
import styles from "./StackTabs.module.css";

/**
 * Accessible tabs (WAI-ARIA tabs pattern):
 *  - click or Left / Right / Home / End switches the tab
 *  - only the active tab is in the tab order (roving tabindex)
 * Tiles of the newly shown panel pop in with a short stagger.
 */
export function StackTabs({ groups }: { groups: SkillGroup[] }) {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shown = useRef(0); // last panel that was animated

  const select = (index: number, focus = false) => {
    setActive(index);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const last = groups.length - 1;
    const next =
      e.key === "ArrowRight" ? (index + 1) % groups.length
      : e.key === "ArrowLeft" ? (index - 1 + groups.length) % groups.length
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    select(next, true);
  };

  // Animate the tiles of the panel that just became visible (skips the first render)
  useGSAP(
    () => {
      if (shown.current === active) return;
      shown.current = active;
      if (prefersReducedMotion() || !root.current) return;
      const panel = root.current.querySelector<HTMLElement>(`[data-panel="${active}"]`);
      if (!panel) return;
      gsap.fromTo(
        panel.children,
        { y: 20, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.035, ease: EASE, overwrite: true },
      );
    },
    { scope: root, dependencies: [active] },
  );

  return (
    <div ref={root} className={styles.stack} data-reveal="">
      <div className={styles.tabs} role="tablist" aria-label="Skill categories">
        {groups.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`tab-${g.id}`}
            className={styles.tab}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={g.id}
            tabIndex={active === i ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {g.label} <i>{g.skills.length}</i>
          </button>
        ))}
      </div>

      {groups.map((g, i) => (
        <ul
          key={g.id}
          id={g.id}
          className={styles.grid}
          role="tabpanel"
          aria-labelledby={`tab-${g.id}`}
          data-panel={i}
          hidden={active !== i}
        >
          {g.skills.map((s) => (
            <StackTile key={s.name} skill={s} />
          ))}
        </ul>
      ))}
    </div>
  );
}
