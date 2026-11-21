/** Work experience and education share one shape, so one component renders both. */
export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  place: string;
  summary?: string;
  bullets: string[];
};

export const experience: TimelineEntry[] = [
  {
    period: "Apr 2026 to Sep 2026",
    title: "Full stack developer",
    org: "Under NDA",
    place: "Remote",
    summary:
      "I engineered and deployed from scratch an internal B2B system for managing manufacturing defects.",
    bullets: [
      "Built the product with React, NestJS and PostgreSQL",
      "Designed the database architecture",
      "Implemented role based access control for Admin, Manager and Executor roles with secure JWT authentication",
      "Developed the frontend with React, TypeScript and Tailwind CSS",
      "Optimized server state management with React Query",
    ],
  },
  {
    period: "Oct 2025 to Mar 2026",
    title: "Web developer",
    org: "Kiborg",
    place: "Vinnytsia, Ukraine",
    summary:
      "I designed and developed a full stack pricing platform from scratch for a manufacturing company.",
    bullets: [
      "Built an automated data synchronization pipeline that gathers product information from several XML feeds into one database",
      "Replaced a legacy HTML solution that was maintained by hand",
      "Built a shared backend API that powers three client applications",
      "Developed promotional landing pages and implemented pages for the main online store",
    ],
  },
  {
    period: "Jun 2024 to Sep 2025",
    title: "Freelance web developer",
    org: "Self employed",
    place: "Remote",
    summary:
      "I built and maintained websites for clients, starting with simple layouts and moving to projects with real backend logic.",
    bullets: [
      "Designed, developed and maintained responsive, SEO optimized landing pages and larger websites with HTML, SCSS, JavaScript and React",
      "Migrated legacy static HTML and CSS markup into dynamic React components with better modularity, styling and layout",
      "Built lightweight custom CRUD backend services with Node.js and Express",
      "Integrated external REST APIs for client data processing and dynamic content",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    period: "2023 to 2027",
    title: "Bachelor’s degree in computer engineering",
    org: "Vinnytsia National Technical University",
    place: "Vinnytsia, Ukraine",
    bullets: [
      "Strong foundation in computer systems, programming and engineering thinking",
      "Studying algorithms, data structures, computer architecture and software development fundamentals",
    ],
  },
  {
    period: "2024 to 2025",
    title: "Frontend development course",
    org: "Mate Academy",
    place: "Remote",
    bullets: [
      "Practical frontend development with a focus on modern web technologies",
      "Building real projects and working with production like workflows",
      "Team collaboration, code reviews and best practices",
    ],
  },
];
