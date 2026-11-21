import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./ContactCard.module.css";

/**
 * Row with a coral icon, a small label and a value.
 * Becomes a link when `href` is set; `action` adds a trailing control (e.g. the copy button).
 */
export function ContactCard({
  icon,
  label,
  value,
  href,
  action,
}: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
  action?: ReactNode;
}) {
  const content = (
    <>
      <span className={styles.badge}>
        <Icon name={icon} size={24} />
      </span>
      <div>
        <small>{label}</small>
        <b>{value}</b>
      </div>
      {action}
    </>
  );

  return href ? (
    <a className={styles.card} href={href} data-reveal="">
      {content}
    </a>
  ) : (
    <div className={styles.card} data-reveal="">
      {content}
    </div>
  );
}
