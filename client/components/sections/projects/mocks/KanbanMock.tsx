import { MockWindow } from "./MockWindow";
import styles from "./KanbanMock.module.css";

/** Three kanban columns made of grey bars; "a" cards are highlighted in coral. */
const columns: { accent: boolean }[][] = [
  [{ accent: true }, { accent: false }, { accent: false }],
  [{ accent: false }, { accent: true }],
  [{ accent: false }, { accent: false }, { accent: false }, { accent: false }],
];

export function KanbanMock() {
  return (
    <MockWindow>
      <div className={styles.kan}>
        {columns.map((col, i) => (
          <div key={i}>
            {col.map((card, j) => (
              <i key={j} className={card.accent ? styles.accent : undefined} />
            ))}
          </div>
        ))}
      </div>
    </MockWindow>
  );
}
