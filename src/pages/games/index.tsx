import Card from '../../components/card';
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
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

  const { search } = useContext(SearchContext);

  const { data, error, errorMessage, isLoading } = useGames();

  const { filters } = useFilterByGenre();

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

  if (error) {
    return (
      <MessagesContainer>
        <Messenger message='O servidor não conseguirá responder por agora, tente voltar novamente mais tarde' />
      </MessagesContainer>
    );
  }

  return (
    <section>
      <GamesContainer>
        <div className='filter'>
          <SearchBar />
          <SelectInput
            id='filter'
            placeholder='Filtros'
            options={filters}
          />
        </div>
        <div className='content'>
          {
            (search === undefined)
              ?
              data?.map((game: GameData) => <Card gameInfo={game} key={game.id} />)
              :
              data?.map((game: GameData) => {
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