"use client";

import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
  type RefObject,
} from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import styles from "./Button.module.css";

type CommonProps = {
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  /** Button follows the pointer slightly on hover (fine pointers only) */
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };
type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

/**
 * The one button used everywhere. Renders an <a> when `href` is given
 * and a real <button> otherwise, so semantics stay correct.
 */
export function Button(props: AsLink | AsButton) {
  const {
    variant = "primary",
    size = "md",
    magnetic = false,
    className,
    children,
    ...rest
  } = props;
  const ref = useRef<HTMLElement>(null);
  useMagnetic(ref, magnetic);

  const classes = [
    styles.btn,
    variant === "ghost" && styles.ghost,
    size === "sm" && styles.sm,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a
        ref={ref as RefObject<HTMLAnchorElement>}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as RefObject<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
