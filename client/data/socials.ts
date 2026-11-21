import { siteConfig } from "@/lib/site";
import type { IconName } from "@/components/ui/Icon";

export type SocialLink = { label: string; href: string; icon: IconName; external: boolean };

/** Social links used in the About section and the footer. Email is skipped when no address is configured. */
export const socialLinks: SocialLink[] = [
  ...(siteConfig.email
    ? [{ label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" as const, external: false }]
    : []),
  { label: "GitHub", href: siteConfig.social.github, icon: "github", external: true },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: "in", external: true },
  { label: "Telegram", href: siteConfig.social.telegram, icon: "tg", external: true },
];
