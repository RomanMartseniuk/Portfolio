import Image from "next/image";
import { hero } from "@/data/hero";
import { FloatingChips } from "./FloatingChips";
import styles from "./Portrait.module.css";

/** Round photo with dashed rings, orbiting dots and floating tech chips. */
export function Portrait() {
  return (
    <div className={styles.portrait} data-hero-photo="">
      <div className={`${styles.ring} ${styles.ringOuter}`} aria-hidden="true" />
      <div className={styles.ring} aria-hidden="true" />
      <div className={`${styles.orbit} ${styles.o3}`} aria-hidden="true">
        <span className={`${styles.dot} ${styles.grey}`} />
      </div>
      <div className={styles.orbit} aria-hidden="true">
        <span className={`${styles.dot} ${styles.coral}`} />
      </div>
      <div className={`${styles.orbit} ${styles.o2}`} aria-hidden="true">
        <span className={`${styles.dot} ${styles.white}`} />
      </div>
      <Image
        className={styles.photo}
        src={hero.photo.src}
        width={hero.photo.width}
        height={hero.photo.height}
        alt={hero.photo.alt}
        priority /* it is the largest visible image, so load it first */
      />
      <FloatingChips chips={hero.chips} />
    </div>
  );
}
