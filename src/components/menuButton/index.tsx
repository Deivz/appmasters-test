import { MouseEventHandler } from "react";
import styles from "./menuButton.module.css"

interface MenuButtonProps {
  isActive: boolean;
  event: MouseEventHandler<HTMLDivElement>;
}

export default function MenuButton({ isActive, event }: MenuButtonProps) {
  return (
    <div className={styles.button}>
      <div className={isActive ? `${styles.change}` : ``} onClick={event}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </div>
  )
}