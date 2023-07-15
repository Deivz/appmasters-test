import { createContext, useContext, useState, useEffect } from "react";
import { GameData } from "../pages/games";
import { getDocs } from "firebase/firestore";
import { gamesCollectionRef } from "../config/firebase";
import { useGames } from "../hooks/useGames";
import { AuthContext } from "./AuthContext";

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
  favorites: GameData[];
  gamesList: GameData[];
  setFavs: React.Dispatch<React.SetStateAction<GameData[]>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  isLoading: boolean;
}

export const FavsAndRatingContext = createContext<FavsAndRatingContextType>({} as FavsAndRatingContextType);

export default function FavsAndRatingContextProvider({ children }: FavsAndRatingContextProps) {

  const { user } = useContext(AuthContext);

  const { data, isLoading } = useGames();

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [favs, setFavs] = useState<GameData[]>([]);
  const [gamesList, setGamesList] = useState<GameData[]>([]);
  const [storedGames, setStoredGames] = useState<Array<StoredGame> | null>([] as StoredGame[]);

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

      setStoredGames(gamesArray);
    } catch (error) {
      setStoredGames(null);
      console.error(error);
    }
  }

  const mergeGamesInfos = () => {
    console.log('chamou o merge');

    for (let game of data) {

      if(storedGames){
        const storedGame = storedGames.find((storedGame) => storedGame.game_id === game.id);
  
        Object.assign(game, { favorite: storedGame?.favorited, rating: storedGame?.rated });
  
        setGamesList((previousValue) => [...previousValue, game]);

      } else {
        Object.assign(game, { favorite: 0, rating: 0 });
  
        setGamesList((previousValue) => [...previousValue, game]);
      }
    }
  }

  useEffect(() => {
    if (data) {
      mergeGamesInfos();
    }

    return () => {
      setGamesList([]);
    }

  }, [data]);

  useEffect(() => {
    getGamesList();
  }, [user]);

  return (
    <FavsAndRatingContext.Provider value={{ favs, favorites, gamesList, setFavs, setErrorMessage, errorMessage, isLoading }}>
      {children}
    </FavsAndRatingContext.Provider>
  );
}