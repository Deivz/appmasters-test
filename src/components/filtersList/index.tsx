import { memo, MouseEventHandler, useContext } from 'react';
import { GenreData } from '../../pages/games';
import { SearchContext } from '../../contexts/SearchContext';
import { FilterListContainer } from './FilterList.styles';

interface FiltersListProps {
  active: boolean;
  list: Array<GenreData>;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const FiltersList = memo(function FilterList({ active, list, onClick }: FiltersListProps) {

  const { find, setSearch } = useContext(SearchContext);

  return (
    <FilterListContainer active={active}>
      <form onSubmit={find} className={active ? 'isActive' : ''}>
        <span onClick={onClick}>X</span>
        <ul>
          {list.map((genre: GenreData) => {
            return (
              <li key={genre.id}>
                <span onClick={() => genre.title === 'Mostrar Todos' ? setSearch('') : setSearch(genre.title)}>
                  {genre.title}
                </span>
              </li>
            )
          })}
        </ul>
      </form>
    </FilterListContainer>
  )
});

export default FiltersList;