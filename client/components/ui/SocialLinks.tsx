import { socialLinks, type SocialLink } from "@/data/socials";
import { Icon } from "./Icon";
import styles from "./SocialLinks.module.css";

/** Row of square icon links. Reused in About and in the footer. */
export function SocialLinks({
  links = socialLinks,
  className,
  ...rest
}: {
  links?: SocialLink[];
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <div className={[styles.socials, className].filter(Boolean).join(" ")} {...rest}>
      {links.map((l) => (
        <a
          key={l.label}
          className={styles.soc}
          href={l.href}
          aria-label={l.label}
          // rel="me" lets search engines link these profiles to the person
          {...(l.external
            ? { target: "_blank", rel: "me noopener noreferrer" }
            : {})}
        >
          <Icon name={l.icon} />
        </a>
      ))}
    </div>
  );
}
