import styles from './games.module.css';
import { useQuery } from 'react-query';
import Card from '../../components/card';
import { useContext, useState } from 'react';
import { SearchContext } from '../../contexts/searchContext';
import ProgressBar from '../../components/progressBar';
import Messenger from '../../components/messenger';

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

export default function Games() {

  const { search } = useContext(SearchContext);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const controller = new AbortController();
  const signal = controller.signal;

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
    retry: false
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <ProgressBar />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className={styles.container}>
        <Messenger message={errorMessage} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <Messenger message='O servidor não conseguirá responder por agora, tente voltar novamente mais tarde' />
      </div>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {
          (search === undefined)
            ?
            data?.map((game: GameData) => <Card gameInfo={game} key={game.id} />)
            :
            data?.map((game: GameData) => {
              if (game.title.toUpperCase().includes(search.toUpperCase())) {
                return <Card gameInfo={game} key={game.id} />
              }
            })
        }
      </div>
    </section>
  )

}
