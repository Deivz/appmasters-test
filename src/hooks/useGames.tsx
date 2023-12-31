import { useQuery } from "react-query";
import { useContext } from "react";
import { GamesContext } from "../contexts/GamesContext";

export function useGames() {

  const { setErrorMessage } = useContext(GamesContext);

  const fetchGames = () => {
    const errorsArray = [
      500, 502, 503, 504, 507, 508, 509
    ]

    const controller = new AbortController();
    const signal = controller.signal;

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

        if (errorsArray.includes(response.status)) {
          setErrorMessage('O servidor falhou em responder, tente recarregar a página');
        } else {
          setErrorMessage('O servidor não conseguirá responder por agora, tente voltar novamente mais tarde');
        }

        controller.abort();
      })
      .catch((error) => {
        throw error;
      });

    return response;
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: fetchGames,
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchInterval: false
  })

  return {
    data, error, isLoading
  }
}