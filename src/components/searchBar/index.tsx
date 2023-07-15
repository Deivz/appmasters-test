import { useContext } from 'react'
import magnifier from '../../assets/img/Lupa.svg';
import { SearchBarContainer } from './SearchBar.styles';
import { GameSearch } from '../../contexts/GameSearchContext';

interface SearchBarProps {
  value: string | undefined;
  setSearchGame: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function SearchBar({ value, setSearchGame }: SearchBarProps) {

  const { find } = useContext(GameSearch);

  return (
    <SearchBarContainer onSubmit={find}>
      <input type='text' placeholder='Buscar' onChange={(event) => setSearchGame(event.target.value)} value={value} />
      <span className='clear' onClick={() => setSearchGame('')}>X</span>
      <i>
        <img src={magnifier} alt='Botão de pesquisar, ícone de uma lupa' />
      </i>
    </SearchBarContainer>
  )
}
