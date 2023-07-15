import Card from '../../components/card';
import { useState, useContext } from 'react';
import ProgressBar from '../../components/progressBar';
import Messenger from '../../components/messenger';
import { GamesContainer, MessagesContainer } from './Games.styles';
import SearchBar from '../../components/searchBar';
import LoggedUserModal from '../../components/loggedUserModal';
import useFilterByGenre from '../../hooks/useFilterByGenre';
import SelectInput from '../../components/selectInput';
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
  value: number;
  label: string;
}

export default function Games() {

  const { data, errorMessage, isLoading} = useContext(FavsAndRatingContext);

  const { filters } = useFilterByGenre();

  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<GenreData[]>([]);
  const [genreArray, setGenreArray] = useState<string[]>([]);

  if (isLoading) {
    return (
      <MessagesContainer>
        <ProgressBar />
      </MessagesContainer>
    );
  }

  if (errorMessage) {
    return (
      <MessagesContainer>
        <Messenger message={errorMessage} />
      </MessagesContainer>
    );
  }

  return (
    <section>
      <GamesContainer>
        <div className='filter'>
          <SearchBar setSearch={setSearch} value={search} />
          <SelectInput
            id='filter'
            placeholder='Filtros'
            options={filters?.sort((a, b) => a.label.localeCompare(b.label))}
            onChange={setFilter}
            value={filter}
            filtersArray={setGenreArray}
          />
        </div>
        <div className='content'>
          {
            data?.
              filter((game: GameData) => {
                return genreArray.length ? genreArray.includes(game.genre) : game
              })
              .filter((game: GameData) => {
                return game.title.toUpperCase().includes(search.toUpperCase())
                  || game.genre.toUpperCase().includes(search.toUpperCase()) ? game : game.title.toLowerCase().includes(search);
              })
              .map((game: GameData) => {
                return <Card gameInfo={game} key={game.id} />
              })
          }
        </div>
      </GamesContainer>
      <LoggedUserModal />
    </section>
  )
}