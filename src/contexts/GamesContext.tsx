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
  user: string;
}

interface GamesContextProps {
  children: React.ReactNode;
}

interface GamesContextType {
  favs: GameData[];
  favorites: GameData[];
  gamesList: GameData[];
  getGamesList: () => void;
  setFavs: React.Dispatch<React.SetStateAction<GameData[]>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  isLoading: boolean;
}

export const GamesContext = createContext<GamesContextType>({} as GamesContextType);

export default function GamesContextProvider({ children }: GamesContextProps) {

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
        user: doc.data().user,
        rated: doc.data().rated,
      }));

      setStoredGames(gamesArray);
    } catch (error) {
      setStoredGames(null);
      console.error(error);
    }
  }

  const mergeGamesInfos = () => {
    for (let game of data) {

      if(storedGames){
        const storedGame = storedGames.find((storedGame) => (storedGame.game_id === game.id && storedGame.user === user?.email));
  
        Object.assign(game, {
          favorite: storedGame?.favorited ? storedGame?.favorited : 0,
          rating: storedGame?.rated ? storedGame?.rated: 0
        });
  
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

  }, [data, storedGames]);

  useEffect(() => {
    getGamesList();
  }, [user]);

  return (
    <GamesContext.Provider value={{ favs, favorites, gamesList, getGamesList, setFavs, setErrorMessage, errorMessage, isLoading }}>
      {children}
    </GamesContext.Provider>
  );
}