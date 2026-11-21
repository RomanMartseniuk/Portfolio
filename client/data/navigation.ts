/**
 * Main navigation. `id` is the section id the link scrolls to and is also
 * what the scroll spy in <Header> watches, so keep them in sync with sections.
 */
export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
