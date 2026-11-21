/**
 * Small helpers for motion preferences. They read matchMedia, so call them
 * only on the client (inside effects / event handlers), never during render.
 */

/** True when the visitor asked the OS for less motion. */
export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** True for mouse / trackpad devices. Pointer effects are disabled on touch. */
export const hasFinePointer = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;
