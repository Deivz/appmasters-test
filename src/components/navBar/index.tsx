import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <ul className={styles.navbar}>
      <li className={styles.item}>Gênero</li>
      <li className={styles.item}>Plataforma</li>
      <li className={styles.item}>Lançamento</li>
    </ul>
  )
}
