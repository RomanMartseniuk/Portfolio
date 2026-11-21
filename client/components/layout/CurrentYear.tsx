"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Shows the current year without calling Date on the server.
 * (With Cache Components the server render must not depend on "now".)
 * The server / first render uses a fixed fallback, then the browser value takes over.
 */
export function CurrentYear({ fallback = 2026 }: { fallback?: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );
  return <>{year}</>;
}
