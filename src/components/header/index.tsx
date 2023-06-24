import SearchBar from '../searchBar';
import styles from './header.module.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import NavBar from '../navBar';

export default function Header() {
  return (
    <section className={styles.secao}>
      <header className={styles.header}>
        <h1>
          <Link to='/'>
            <img className={styles.logo} src={logo} alt='Logomarca da Fliper Masters' />
          </Link>
        </h1>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <div className={styles.navBar}>
          <NavBar />
        </div>
      </header>
    </section>
  )
}
