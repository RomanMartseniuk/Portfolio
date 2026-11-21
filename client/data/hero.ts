/** Content of the hero section. Later this can come from Strapi. */
export const hero = {
  status: "Open to new projects · Vinnytsia, Ukraine",
  greetingName: "Roman Martseniuk",
  // Two lines of the gradient headline (the first one is visually split for the intro animation)
  headline: ["Full stack", "developer"],
  // Phrases that rotate after "I build"
  phrases: [
    "clean interfaces",
    "React frontends",
    "Node.js backends",
    "real products",
  ],
  lede: "I specialize in React, TypeScript and Node.js. I build products end to end, from the interface to the database, with clean and maintainable code.",
  stats: [
    { value: 2, suffix: "+", label: "years of commercial experience" },
    { value: 3, suffix: "", label: "roles, from freelance to a team" },
    { text: "VNTU", label: "computer engineering" },
  ],
  photo: {
    src: "/images/photo-hero.png",
    width: 301,
    height: 301,
    alt: "Portrait of Roman Martseniuk, full stack developer",
  },
  // Floating chips around the portrait. `depth` is the parallax strength.
  chips: [
    { label: "React", depth: 18, position: "c1" },
    { label: "TypeScript", depth: 28, position: "c2" },
    { label: "NestJS", depth: 12, position: "c3" },
  ],
} as const;
