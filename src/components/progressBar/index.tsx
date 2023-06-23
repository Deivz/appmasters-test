import { useEffect, useState } from 'react';
import styles from './progressBar.module.css';

export default function ProgressBar() {

  const [filled, setFilled] = useState<number>(0);
  const [isLoading] = useState<boolean>(true);

  useEffect(() => {
    if (filled < 100 && isLoading) {
      setTimeout(() => setFilled((prev: number) => prev += 2), 30);
    }
  }, [filled, isLoading])

  return (
    <section className={styles.section}>
      <div>
        <div className={styles.pixelCorners}>Loading...</div>
        <div className={styles.pixelCornersWrapper}>
          <div className={styles.progressBar}>
            <div style={{
              backgroundColor: "red",
              height: "100%",
              transition: "width 0.3s",
              width: `${filled}%`
            }}></div>
            <span className={styles.progressPercent}>{filled}%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
