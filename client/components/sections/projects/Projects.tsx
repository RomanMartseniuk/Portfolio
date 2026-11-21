import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

/** Project grid: two cards on the first row (7 + 5 columns), a wide one below. */
export function Projects() {
  return (
    <Section
      id="projects"
      number="04"
      kicker="Recent projects"
      title="Things I’ve built."
      flushTop
    >
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
