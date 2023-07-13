import Card from '../../components/card';
import { useContext, useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import FilterButton from '../../components/filterButton';
import { GamesContainer } from './Favorites.styles';
import SearchBar from '../../components/searchBar';
import LoggedUserModal from '../../components/loggedUserModal';
// import useFilterByGenre from '../../hooks/useFilterByGenre';
// import { useGames } from '../../hooks/useGames';
import { FavsAndRatingContext } from '../../contexts/FavsAndRatingContext';

export interface GameData {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export interface GenreData {
  id: number;
  title: string;
}

export default function Favorites() {

  const { search } = useContext(SearchContext);
  const { favs } = useContext(FavsAndRatingContext);

  const [active, setActive] = useState<boolean>(false);

  // const { filterByGenre } = useFilterByGenre();

  const toggleMode = (): void => {
    setActive(!active);
  }

  console.log(favs);

  return (
    <section>
      <GamesContainer>
        <div className='filter'>
          <SearchBar />
          <FilterButton event={toggleMode} />
        </div>
        <div className='menu'>
          {/* <FiltersList list={filterByGenre(favs)} onClick={toggleMode} active={active} /> */}
        </div>
        <div className='content'>
          {
            (search === undefined)
              ?
              favs.map((game: GameData) => <Card gameInfo={game} key={game.id} />)
              :
              favs.map((game: GameData) => {
                if (
                  game.title.toUpperCase().includes(search.toUpperCase())
                  || game.genre.toUpperCase().includes(search.toUpperCase())
                ) {
                  return <Card gameInfo={game} key={game.id} />
                }
              })
          }
        </div>
      </GamesContainer>
      <LoggedUserModal />
    </section>
  )
}