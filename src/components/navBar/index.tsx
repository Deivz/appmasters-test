import styles from './navBar.module.css';
import { Link, useLocation } from 'react-router-dom';


export default function NavBar() {
  
  const {pathname} = useLocation();

  return (
    <ul className={styles.navbar}>
      <li className={`${styles.item} ${pathname === '/home' ? styles.active : ''}`}>
        <Link to='/home'>Home</Link>
      </li>
      <li className={`${styles.item} ${pathname === '/' ? styles.active : ''}`}>
        <Link to='/'>Games</Link>
      </li>
      <li className={`${styles.item} ${pathname === '/consoles' ? styles.active : ''}`}>
        <Link to='/consoles'>Consoles</Link>
      </li>
    </ul>
  );
}
