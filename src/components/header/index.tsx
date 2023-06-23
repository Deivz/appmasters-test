import { useState } from 'react';
// import NavBar from '../navBar';
import SearchBar from '../searchBar';
import styles from './header.module.css';
import logo from '../../assets/img/logo-temp-sec.png';
import { Link } from 'react-router-dom';
import MenuButton from '../menuButton';

export default function Header() {

  const [isActive, setIsActive] = useState<boolean>(false);

  function ToggleMode(): void {
    setIsActive(!isActive);
  }

  return (
    <section className={styles.secao}>
      <header className={styles.header}>
        <h1>
          <Link to='/'>
            <img className={styles.logo} src={logo} alt='Logomarca da App Masters Gaming' />
          </Link>
        </h1>
        <SearchBar />
        <MenuButton isActive={isActive} event={ToggleMode} />
      </header>
    </section>
  )
}
