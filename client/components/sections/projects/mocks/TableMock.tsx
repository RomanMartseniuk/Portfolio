import { MockWindow } from "./MockWindow";
import styles from "./TableMock.module.css";

/** Table rows: [label width, highlight the last cell, last cell width]. */
const rows = [
  { label: 80, accent: true },
  { label: 64, accent: false },
  { label: 96, accent: false },
  { label: 72, accent: true },
];

export function TableMock() {
  return (
    <MockWindow>
      <div className={styles.body}>
        {rows.map((r) => (
          <div className={styles.row} key={r.label}>
            <i style={{ width: r.label }} />
            <i className={styles.fill} />
            <i className={r.accent ? styles.accent : undefined} style={{ width: 24 }} />
          </div>
        ))}
      </div>
    </MockWindow>
  );
}
