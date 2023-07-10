import { useQuery } from 'react-query';
import Card from '../../components/card';
import { useContext, useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import ProgressBar from '../../components/progressBar';
import Messenger from '../../components/messenger';
import FiltersList from '../../components/filtersList';
import FilterButton from '../../components/filterButton';
import { GamesContainer, MessagesContainer } from './Games.styles';
import SearchBar from '../../components/searchBar';

interface GameData {
  id: string;
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
  id: string;
  title: string;
}

export default function Games() {

  const { search } = useContext(SearchContext);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  const controller = new AbortController();
  const signal = controller.signal;

  const toggleMode = (): void => {
    setActive(!active);
  }

  const filterByGenre = (games: Array<GameData>): Array<GenreData> => {
    const genres: Array<GenreData> = [{ id: 'todos', title: 'Mostrar Todos' }];

    for (let game of games) {
      const hasGenre = genres.find((genre) => genre.title === game.genre);

      if (!hasGenre) {
        genres.push({ id: game.id, title: game.genre });
      }
    }

    return genres;
  }

  const { data, error, isLoading } = useQuery<Array<GameData>>('data', () => {

    const timeOutId = setTimeout(() => {
      setErrorMessage('O servidor demorou para responder, tente mais tarde');
      controller.abort();
    }, 5000);

    const response = fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', {
      headers: {
        'dev-email-address': 'carlosd_oliveira@hotmail.com'
      },
      signal
    })
      .then((response) => {
        clearTimeout(timeOutId);

        if (response.ok) {
          return response.json();
        }

        setErrorMessage('O servidor falhou em responder, tente recarregar a página');
        controller.abort();
      })
      .catch((error) => {
        throw error;
      });

    return response;
  }, {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: true,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchInterval: false
  });

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
          <FilterButton event={toggleMode} />
        </div>
        <div className='menu'>
          {
            data &&
            (
              <FiltersList list={filterByGenre(data)} onClick={toggleMode} active={active} />
            )
          }
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
    </section>
  )
}