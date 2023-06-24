import { MouseEventHandler } from "react";
import styles from "./filterButton.module.css"
import { MdTune } from "react-icons/md";

interface FilterButtonProps {
  isActive: boolean;
  event: MouseEventHandler<HTMLDivElement>;
}

export default function FilterButton({ isActive, event }: FilterButtonProps) {
  return (
    <div className={styles.button}>
      <div className={isActive ? `${styles.change}` : ``} onClick={event}>
        <div className={styles.container}>
          <span style={{ fontSize: '1.5rem' }}><MdTune /></span>
          <span>Filtros</span>
        </div>
      </div>
    </div>
  )
}