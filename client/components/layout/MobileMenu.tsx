import type { CSSProperties } from "react";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import styles from "./MobileMenu.module.css";

/**
 * Full screen menu for small screens. Open / close state lives in <Header>.
 * Links appear one after another using the --i CSS variable as a delay multiplier.
 */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="menu"
      className={`${styles.menu} ${open ? styles.open : ""}`}
      aria-hidden={!open}
      inert={!open}
    >
      {navItems.map((item, i) => (
        <a
          key={item.id}
          className={styles.link}
          style={{ "--i": i } as CSSProperties}
          href={`#${item.id}`}
          onClick={onClose}
        >
          {item.label}
        </a>
      ))}
      <Button className={styles.cta} href="#contact" onClick={onClose}>
        Say hello
      </Button>
    </div>
  );
}
