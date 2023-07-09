import magnifier from '../../assets/img/Lupa.svg';
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { SearchBarContainer } from './SearchBar.styles';

export default function SearchBar() {

  const { find, setSearch } = useContext(SearchContext);

  return (
    <SearchBarContainer onSubmit={find}>
      <input type='text' placeholder='Buscar' onChange={(e) => setSearch(e.target.value)} />
      <i onClick={find} >
        <img src={magnifier} alt='Botão de pesquisar, ícone de uma lupa' />
      </i>
    </SearchBarContainer>
  )
}
