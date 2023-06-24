import { memo, MouseEventHandler, useContext } from 'react';
import { GenreData } from '../../pages/games';
import styles from './filtersList.module.css'
import { SearchContext } from '../../contexts/searchContext';

interface FiltersListProps {
  list: Array<GenreData>;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const FiltersList = memo(function FilterList({ list, onClick }: FiltersListProps) {

  const { find, setSearch } = useContext(SearchContext);

  return (
    <form onSubmit={find} className={styles.navigation}>
      <span className={styles.close} onClick={onClick}>X</span>
      <ul className={styles.list}>
        {list.map((genre: GenreData) => {
          return (
            <li className={styles.item} key={genre.id}>
              <span onClick={() => genre.title === 'Mostrar Todos' ? setSearch('') : setSearch(genre.title)}>
                {genre.title}
              </span>
            </li>
          )
        })}
      </ul>
    </form>
  )
});

export default FiltersList;