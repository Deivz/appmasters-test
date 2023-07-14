import Card from '../../components/card';
import { useState } from 'react';
import ProgressBar from '../../components/progressBar';
import Messenger from '../../components/messenger';
import { GamesContainer, MessagesContainer } from './Games.styles';
import SearchBar from '../../components/searchBar';
import LoggedUserModal from '../../components/loggedUserModal';
import useFilterByGenre from '../../hooks/useFilterByGenre';
import { useGames } from '../../hooks/useGames';
import SelectInput from '../../components/selectInput';

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

  const { data, errorMessage, isLoading } = useGames();
  const { filters } = useFilterByGenre();

  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<GenreData>({ value: 0, label: 'Filtros' });

  if (isLoading) {
    return (
      <MessagesContainer>
        <ProgressBar />
      </MessagesContainer>
    );
  }
// console.log(data)
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
          />
        </div>
        <div className='content'>
          {
            data?.
              filter((game: GameData) => {
                if(filter.label !== 'Filtros'){
                  return game.genre.includes(filter.label) ? game : game.title.includes(filter.label);
                }

                return game.genre.includes('') ? game : game.title.includes(filter.label);
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