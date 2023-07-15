import { useContext } from 'react'
import magnifier from '../../assets/img/Lupa.svg';
import { SearchBarContainer } from './SearchBar.styles';
import { SearchContext } from '../../contexts/SearchContext';

interface SearchBarProps {
  value: string | undefined;
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function SearchBar({ value, setSearch }: SearchBarProps) {

  const { find } = useContext(SearchContext);

  return (
    <SearchBarContainer onSubmit={find}>
      <input type='text' placeholder='Buscar' onChange={(event) => setSearch(event.target.value)} value={value} />
      <span className='clear' onClick={() => setSearch('')}>X</span>
      <i>
        <img src={magnifier} alt='Botão de pesquisar, ícone de uma lupa' />
      </i>
    </SearchBarContainer>
  )
}
