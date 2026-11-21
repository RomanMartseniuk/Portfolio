import { siteConfig } from "@/lib/site";

/** Static contact details. Email comes from env (see lib/site.ts). */
export const contact = {
  kicker: "Contact",
  title: "Send me a message.",
  address: "Vinnytsia, Ukraine",
  phone: { label: "+380 98 701 02 92", href: "tel:+380987010292" },
  email: siteConfig.email,
} as const;

export const idea = {
  title: "Do you have a project idea? Let’s discuss it.",
  text: "I’m always open to new ideas and collaborations, so feel free to reach out. We can turn your ideas into real projects together.",
  cta: "Let’s work together",
} as const;
