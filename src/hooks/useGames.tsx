import { useQuery } from "react-query";
import { GameData } from "../pages/games";
import { useState } from "react";

export function useGames() {

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
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: true,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchInterval: false
  });

  return {
    data, error, isLoading, errorMessage
  }
}