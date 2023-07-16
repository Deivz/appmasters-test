import Card from '../../components/card';
import { useState, useContext } from 'react';
import ProgressBar from '../../components/progressBar';
import Messenger from '../../components/messenger';
import { GamesContainer, MessagesContainer } from './Games.styles';
import LoggedUserModal from '../../components/loggedUserModal';
import useFilterByGenre from '../../hooks/useFilterByGenre';
import { IoMdHeart } from 'react-icons/io'
import { ImSortAmountAsc, ImSortAmountDesc } from 'react-icons/im'
import { FavsAndRatingContext } from '../../contexts/GamesContext';
import ActionButton from '../../components/actionButton';
import { GameSearch } from '../../contexts/GameSearchContext';
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
  favorite: number;
  rating: number;
};

export interface GenreData {
  value: number;
  label: string;
}

export default function Games() {

  const { errorMessage, gamesList, isLoading } = useContext(FavsAndRatingContext);
  const { searchGame } = useContext(GameSearch);

  const { filters } = useFilterByGenre();

  const [favorites, setFavorites] = useState<boolean>(false);
  const [filter, setFilter] = useState<GenreData[]>([]);
  const [genreArray, setGenreArray] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

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
    <section >
      <GamesContainer>
        <div className='filters'>
          <div className='actionButtons'>
            <ActionButton icon={isActive ? <ImSortAmountDesc /> : <ImSortAmountAsc />} text='Ordenar' onClick={setIsActive} value={isActive} order={isActive} />
            <ActionButton icon={<IoMdHeart />} text='Favoritos' onClick={setFavorites} value={favorites} />
          </div>
          <div className='selectBar'>
            <SelectInput
              id='filter'
              placeholder='Filtros'
              options={filters?.sort((a, b) => a.label.localeCompare(b.label))}
              onChange={setFilter}
              value={filter}
              filtersArray={setGenreArray}
            />
          </div>
        </div>
        <div className='content'>
          {
            gamesList
            .sort((gameOne, gameTwo) => isActive ? gameTwo.rating - gameOne.rating : gameOne.rating - gameTwo.rating)
            .filter((game: GameData) => {
              return favorites ? game.favorite : game;
            })
            .filter((game: GameData) => {
              return genreArray.length ? genreArray.includes(game.genre) : game;
            })
            .filter((game: GameData) => {
              if (searchGame) {
                return game.title.toUpperCase().includes(searchGame.toUpperCase()) ||
                  game.genre.toUpperCase().includes(searchGame.toUpperCase()) ||
                  game.title.toLowerCase().includes(searchGame);
              } else {
                return game;
              }
            })
            .map((game: GameData) => {
              return <Card gameInfo={game} key={game.id} />;
            })
          }
        </div>
      </GamesContainer>
      <LoggedUserModal />
    </section>
  )
}