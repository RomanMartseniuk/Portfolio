"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./CopyEmailButton.module.css";

/** Square button that copies text to the clipboard and shows a check mark for 1.6s. */
export function CopyEmailButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  // Clear a pending timeout if the component unmounts
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked (insecure context / permissions): fail silently
    }
  };

  return (
    <button
      type="button"
      className={styles.copy}
      aria-label={copied ? "Copied" : "Copy email address"}
      onClick={copy}
    >
      <Icon name={copied ? "check" : "copy"} />
    </button>
  );
}
