import styles from './searchBar.module.css';
import magnifier from '../../assets/img/Lupa.svg';
import { useContext } from 'react';
import { SearchContext } from '../../contexts/searchContext';

export default function SearchBar() {

  const { find, setSearch } = useContext(SearchContext);

  return (
    <>
      <form className={styles.search} onSubmit={find}>
        <input type='text' placeholder='Buscar' className={styles.searchField} onChange={(e) => setSearch(e.target.value)} />
        <i className={styles.magnifierIcon} onClick={find} >
          <img src={magnifier} alt='Botão de pesquisar, ícone de uma lupa' className={styles.magnifier} />
        </i>
      </form>
    </>
  )
}
