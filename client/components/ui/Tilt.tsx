"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useTilt } from "@/hooks/useTilt";

/** Wrapper that adds the pointer tilt effect to any element (article, figure, div). */
export function Tilt({
  as: Tag = "div",
  max = 8,
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  max?: number;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  useTilt(ref, max);
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
