import SearchBar from '../searchBar';
import styles from './header.module.css';
import logo from '../../assets/img/logo-temp-sec.png';
import { Link } from 'react-router-dom';
import NavBar from '../navBar';

export default function Header() {
  return (
    <section className={styles.secao}>
      <header className={styles.header}>
        <h1>
          <Link to='/'>
            <img className={styles.logo} src={logo} alt='Logomarca da App Masters Gaming' />
          </Link>
        </h1>
        <SearchBar />
        <div className={styles.navBar}>
          <NavBar />
        </div>
      </header>
    </section>
  )
}
