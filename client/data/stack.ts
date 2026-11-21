/**
 * Skills shown in the Stack section, split into tabs.
 * Icons live in /public/logos. Add a skill by adding one line to its group.
 */
export type Skill = { name: string; icon: string };
export type SkillGroup = { id: string; label: string; skills: Skill[] };

const logo = (file: string) => `/logos/${file}`;

export const skillGroups: SkillGroup[] = [
  {
    id: "pn0",
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: logo("html5.png") },
      { name: "CSS3", icon: logo("css3.png") },
      { name: "Sass", icon: logo("sass.png") },
      { name: "JavaScript", icon: logo("javascript.png") },
      { name: "TypeScript", icon: logo("typescript.png") },
      { name: "React", icon: logo("react.png") },
      { name: "Redux", icon: logo("redux.svg") },
      { name: "React Query", icon: logo("react-query.svg") },
      { name: "Next.js", icon: logo("nextjs.svg") },
      { name: "Tailwind", icon: logo("tailwind.png") },
      { name: "Shadcn/ui", icon: logo("shadcn.svg") },
      { name: "Axios", icon: logo("axios.svg") },
    ],
  },
  {
    id: "pn1",
    label: "Backend and deploy",
    skills: [
      { name: "Node.js", icon: logo("nodejs.png") },
      { name: "Express", icon: logo("express.png") },
      { name: "NestJS", icon: logo("nestjs.svg") },
      { name: "Strapi", icon: logo("strapi.svg") },
      { name: "REST APIs", icon: logo("rest.svg") },
      { name: "Postman", icon: logo("postman.svg") },
      { name: "JWT", icon: logo("jwt.svg") },
      { name: "RBAC", icon: logo("rbac.svg") },
      { name: "Prisma", icon: logo("prisma.svg") },
      { name: "PostgreSQL", icon: logo("postgresql.svg") },
      { name: "MySQL", icon: logo("mysql.png") },
      { name: "SQLite", icon: logo("sqlite.svg") },
      { name: "DataGrip", icon: logo("datagrip.svg") },
      { name: "Vercel", icon: logo("vercel.svg") },
      { name: "Render", icon: logo("render.svg") },
    ],
  },
  {
    id: "pn2",
    label: "Tooling and process",
    skills: [
      { name: "Git", icon: logo("git.png") },
      { name: "GitHub", icon: logo("github.svg") },
      { name: "Claude AI", icon: logo("claude.svg") },
      { name: "VS Code", icon: logo("vscode.png") },
      { name: "npm", icon: logo("npm.svg") },
      { name: "Vite", icon: logo("vite.svg") },
      { name: "Webpack", icon: logo("webpack.svg") },
      { name: "ESLint", icon: logo("eslint.svg") },
      { name: "Prettier", icon: logo("prettier.svg") },
      { name: "Figma", icon: logo("figma.png") },
      { name: "Jira", icon: logo("jira.svg") },
      { name: "Linux", icon: logo("linux.svg") },
      { name: "Scrum", icon: logo("scrum.svg") },
      { name: "Kanban", icon: logo("kanban.svg") },
      { name: "Waterfall", icon: logo("waterfall.svg") },
    ],
  },
];
