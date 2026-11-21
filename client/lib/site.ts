export const siteConfig = {
  name: "Roman Martseniuk",
  title: "Roman Martseniuk | Full Stack Developer (React, Node.js)",
  titleTemplate: "%s | Roman Martseniuk",
  description:
    "Portfolio of Roman Martseniuk, full stack developer in Vinnytsia, Ukraine. React, TypeScript, NestJS and Node.js products built from interface to database.",
  // Set NEXT_PUBLIC_SITE_URL in .env.local and in the Vercel project settings.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  jobTitle: "Full stack developer",
  // Public contact email, set in .env.local and in the Vercel project settings.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  city: "Vinnytsia",
  country: "UA",
  themeColor: "#181818",
  social: {
    github: "https://github.com/RomanMartseniuk",
    linkedin: "https://www.linkedin.com/in/roman-martseniuk-14a9b5281/",
    telegram: "https://t.me/RomanMartseniuk",
  },
  keywords: [
    "Roman Martseniuk",
    "full stack developer",
    "React developer",
    "Node.js developer",
    "NestJS",
    "TypeScript",
    "portfolio",
    "Vinnytsia",
    "Ukraine",
  ],
} as const;
