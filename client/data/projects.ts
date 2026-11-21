/** Projects shown in the Projects section. */
export type ProjectVisual =
  | { type: "kanban" }
  | { type: "table" }
  | { type: "image"; src: string; width: number; height: number; alt: string };

export type Project = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  details: string;
  visual: ProjectVisual;
  /** Wide cards span the full grid row and put the image next to the text */
  wide?: boolean;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Defect management system",
    tags: ["React", "NestJS", "PostgreSQL"],
    description:
      "An internal B2B system for tracking manufacturing defects, built from scratch under NDA.",
    details:
      "Role based access for admins, managers and executors, secure JWT authentication and React Query for fast server state. Screenshots stay private under the NDA.",
    visual: { type: "kanban" },
  },
  {
    id: "p2",
    title: "Pricing platform",
    tags: ["Node.js", "XML feeds", "API"],
    description:
      "A full stack platform that gathers product data from several XML feeds into one database.",
    details:
      "It replaced a legacy HTML page that was maintained by hand, and one shared backend API now powers three client applications.",
    visual: { type: "table" },
  },
  {
    id: "p3",
    title: "MLT Oblik",
    tags: ["Web app", "Internal tool"],
    description:
      "Internal purchases, warehouse stock and order allocation in one system for a repair service.",
    details:
      "Built for everyday work: see what was bought, what sits on the shelf and which order it goes to.",
    wide: true,
    visual: {
      type: "image",
      src: "/images/mlt-dashboard.jpg",
      width: 1536,
      height: 730,
      alt: "MLT Oblik dashboard in the light theme, shown with demo data",
    },
  },
];
