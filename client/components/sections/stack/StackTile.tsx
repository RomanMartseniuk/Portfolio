import Image from "next/image";
import type { Skill } from "@/data/stack";
import styles from "./StackTile.module.css";

/** Square card with a technology logo and its name. */
export function StackTile({ skill }: { skill: Skill }) {
  return (
    <li className={styles.tile} data-cursor-hot="">
      {/* Logos are decorative: the name below is the accessible text */}
      <Image src={skill.icon} width={56} height={56} alt="" />
      <span className={styles.name}>{skill.name}</span>
    </li>
  );
}
