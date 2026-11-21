import styles from "./Decor.module.css";

/**
 * Quiet background details. All of them are aria-hidden, sit behind the content
 * and have very low opacity. `data-par` makes <ParallaxController /> move them on scroll.
 */

/** Soft dotted grid fading out from the right */
export function DotsGrid() {
  return <div className={`${styles.bgl} ${styles.dots}`} aria-hidden="true" />;
}

/** Large outline circle. `size` picks one of two presets used in the hero. */
export function Ring({ size, depth }: { size: "lg" | "md"; depth: number }) {
  return (
    <div
      className={`${styles.bgl} ${styles.ring} ${size === "lg" ? styles.ringLg : styles.ringMd}`}
      aria-hidden="true"
      data-par={depth}
    />
  );
}

/** Faux code snippet, desktop only */
export function CodeSnippet() {
  return (
    <pre className={`${styles.bgl} ${styles.code}`} aria-hidden="true" data-par="30">
      <b>const</b> roman = {"{"}
      {"\n  "}role: <b>&quot;Full stack developer&quot;</b>,
      {"\n  "}stack: [<b>&quot;React&quot;</b>, <b>&quot;TypeScript&quot;</b>, <b>&quot;NestJS&quot;</b>],
      {"\n  "}location: <b>&quot;Vinnytsia, Ukraine&quot;</b>,
      {"\n  "}openToWork: <b>true</b>,
      {"\n"}
      {"};"}
    </pre>
  );
}

/** Circuit board lines for the About section */
export function Circuit() {
  return (
    <svg
      className={`${styles.bgl} ${styles.circuit}`}
      viewBox="0 0 480 480"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.5"
      aria-hidden="true"
      data-par="30"
    >
      <path d="M0 80H120L160 120H300" />
      <circle cx="300" cy="120" r="5" />
      <path d="M0 200H80L120 240H260V300H400" />
      <circle cx="400" cy="300" r="5" />
      <path d="M480 60H380L340 100V180H240" />
      <circle cx="240" cy="180" r="5" />
      <path d="M120 480V400L160 360H320" />
      <circle cx="320" cy="360" r="5" />
      <path d="M480 400H440L400 440V480" />
      <circle cx="400" cy="440" r="5" />
      <path d="M200 0V60L240 100" />
      <circle cx="240" cy="100" r="5" />
    </svg>
  );
}

/** Topographic ellipses for the Contact section */
export function Topo() {
  const rings = [
    { rx: 290, ry: 190, r: -12 },
    { rx: 240, ry: 150, r: -8 },
    { rx: 190, ry: 112, r: -4 },
    { rx: 140, ry: 76, r: 2 },
    { rx: 90, ry: 44, r: 8 },
    { rx: 44, ry: 20, r: 14 },
  ];
  return (
    <svg
      className={`${styles.bgl} ${styles.topo}`}
      viewBox="0 0 640 480"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.5"
      aria-hidden="true"
      data-par="30"
    >
      {rings.map((e) => (
        <ellipse
          key={e.rx}
          cx="300"
          cy="260"
          rx={e.rx}
          ry={e.ry}
          transform={`rotate(${e.r} 300 260)`}
        />
      ))}
    </svg>
  );
}

/** Faint plus-sign pattern for the call to action band */
export function PlusGrid() {
  return <div className={`${styles.bgl} ${styles.plus}`} aria-hidden="true" />;
}
