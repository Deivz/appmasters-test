import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <ul className={styles.navbar}>
      <li className={styles.item}>Home</li>
      <li className={styles.item}>Games</li>
      <li className={styles.item}>Consoles</li>
    </ul>
  )
}
