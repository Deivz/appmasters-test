import styles from './games.module.css';
import { useQuery } from 'react-query';
import Card from '../../components/card';
import { useContext } from 'react';
import { SearchContext } from '../../contexts/searchContext';

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

  const { data, error, isLoading } = useQuery<Array<GameData>>('data', () => {
    return fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', {
      headers: {
        'dev-email-address': 'carlosd_oliveira@hotmail.com'
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro na requisição');
        }
      })
      .then((responseData) => {
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        return responseData;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }, {
    retry: 5,
    retryDelay: 1000,
    refetchInterval: false
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Algo deu errado</div>;
  }

  if (!data) {
    return <div>Dados não disponíveis</div>;
  }

  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        {
          (search === undefined )
            ?
            data.map((game: GameData) => <Card gameInfo={game} />)
            :
            data.map((game: GameData) => {
              if (game.title.toUpperCase().includes(search.toUpperCase())) {
                return <Card gameInfo={game} />
              }
            })
        }
      </div>
    </section>
  )
}
