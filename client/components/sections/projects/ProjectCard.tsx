"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Icon } from "@/components/ui/Icon";
import { Tilt } from "@/components/ui/Tilt";
import { KanbanMock } from "./mocks/KanbanMock";
import { TableMock } from "./mocks/TableMock";
import styles from "./ProjectCard.module.css";

/** Picks the preview for a project: a CSS drawn mock-up or a real screenshot. */
function Visual({ project }: { project: Project }) {
  const v = project.visual;
  if (v.type === "image") {
    return (
      <Image
        className={styles.shot}
        src={v.src}
        width={v.width}
        height={v.height}
        alt={v.alt}
        sizes="(min-width: 768px) 560px, 100vw"
      />
    );
  }
  return <div className={styles.lift}>{v.type === "kanban" ? <KanbanMock /> : <TableMock />}</div>;
}

/**
 * Project card with a preview, tags, text and a "Know more" toggle
 * that expands extra details (animated with a grid-rows transition).
 */
export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const hasShot = project.visual.type === "image";

  const classes = [styles.card, project.wide && styles.wide, open && styles.open]
    .filter(Boolean)
    .join(" ");

  return (
    <Tilt as="article" className={classes} data-reveal="" data-cursor-hot="">
      <div className={`${styles.thumb} ${hasShot ? styles.hasShot : ""}`}>
        <Visual project={project} />
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div id={detailsId} className={styles.more}>
          <div>
            <p>{project.details}</p>
          </div>
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen((v) => !v)}
        >
          Know more <Icon name="plus" />
        </button>
      </div>
    </Tilt>
  );
}
