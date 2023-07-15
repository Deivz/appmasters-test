import { createContext, useState, useEffect } from "react";
import { GameData } from "../pages/games";
import { getDocs } from "firebase/firestore";
import { gamesCollectionRef } from "../config/firebase";
import { useGames } from "../hooks/useGames";

interface StoredGame {
  id: string;
  game_id: number;
  favorited: number;
  rated: number;
}

interface FavsAndRatingContextProps {
  children: React.ReactNode;
}

interface FavsAndRatingContextType {
  favs: GameData[];
  favorites: Array<GameData>;
  setFavs: React.Dispatch<React.SetStateAction<GameData[]>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  isLoading: boolean;
  data: GameData[] | undefined;
}

export const FavsAndRatingContext = createContext<FavsAndRatingContextType>({} as FavsAndRatingContextType);

export default function FavsAndRatingContextProvider({ children }: FavsAndRatingContextProps) {

  const { data, isLoading } = useGames();

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [favs, setFavs] = useState<GameData[]>([]);
  const [gamesList, setGamesList] = useState<Array<StoredGame>>([] as StoredGame[]);

  const favorites: Array<GameData> = [];

  async function getGamesList() {

    try {
      const docsArray = await getDocs(gamesCollectionRef);
      const gamesArray: StoredGame[] = docsArray.docs.map((doc) => ({
        id: doc.id,
        game_id: doc.data().game_id,
        favorited: doc.data().favorited,
        rated: doc.data().rated,
      }));

      setGamesList(gamesArray);
    } catch (error) {
      console.error(error);
    }

  }

  if (data) {
    for (let game of data) {
      const hasFavAndStar = gamesList.find((storedGame) => storedGame.game_id === game.id);

      if (hasFavAndStar) {
        Object.assign(game, { favorite: hasFavAndStar.favorited, rate: hasFavAndStar.rated });
      }
    }
  }

  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <FavsAndRatingContext.Provider value={{ favs, favorites, setFavs, setErrorMessage, errorMessage, isLoading, data }}>
      {children}
    </FavsAndRatingContext.Provider>
  );
}