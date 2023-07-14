import { memo, MouseEventHandler, useState } from 'react';
import { GameData } from '../../pages/games';

import { FilterListContainer } from './FilterList.styles';

interface FiltersListProps {
  active: boolean;
  list: Array<GameData>;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const FiltersList = memo(function FilterList({ active, list, onClick }: FiltersListProps) {

  const [search, setSearch] = useState<string>('');

  return (
    <FilterListContainer active={active}>
      {/* <form onSubmit={find} className={active ? 'isActive' : ''}> */}
      <form className={active ? 'isActive' : ''}>
        <span onClick={onClick}>X</span>
        <ul>
          {list.map((genre: GameData) => {
            return (
              <li key={genre.id}>
                {/* <span onClick={() => genre.title === 'Mostrar Todos' ? setSearch('') : setSearch(genre.title)}> */}
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