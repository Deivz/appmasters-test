import magnifier from '../../assets/img/Lupa.svg';
import { SearchBarContainer } from './SearchBar.styles';

interface SearchBarProps {
  value: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ value, setSearch }: SearchBarProps) {

  return (
    <SearchBarContainer>
      <input type='text' placeholder='Buscar' onChange={(e) => setSearch(e.target.value)} value={value} />
      <span className='clear' onClick={() => setSearch('')}>X</span>
      <i>
        <img src={magnifier} alt='Botão de pesquisar, ícone de uma lupa' />
      </i>
    </SearchBarContainer>
  )
}
