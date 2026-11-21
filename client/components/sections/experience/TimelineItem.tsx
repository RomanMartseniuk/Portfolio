import type { TimelineEntry } from "@/data/experience";
import { Icon } from "@/components/ui/Icon";
import styles from "./Timeline.module.css";

/** One job or study entry: period on the left, details on the right (stacked on mobile). */
export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <article className={styles.job} data-reveal="">
      <div>
        <p className="mono accent">{entry.period}</p>
      </div>
      <div>
        <h3>{entry.title}</h3>
        <div className={`${styles.meta} mono`}>
          <span className={styles.org}>{entry.org}</span>
          <span>
            <Icon name="pin" size={16} />
            {entry.place}
          </span>
        </div>
        {entry.summary && <p className={styles.summary}>{entry.summary}</p>}
        <ul className={styles.bullets}>
          {entry.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
