import { createContext, useState, useEffect } from "react";
import { GameData } from "../pages/games";
import { getDocs } from "firebase/firestore";
import { gamesCollectionRef } from "../config/firebase";

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
  gamesList: StoredGame[];
  setFavs: React.Dispatch<React.SetStateAction<GameData[]>>;
}

export const FavsAndRatingContext = createContext<FavsAndRatingContextType>({} as FavsAndRatingContextType);

export default function FavsAndRatingContextProvider({ children }: FavsAndRatingContextProps) {

  const [gamesList, setGamesList] = useState<Array<StoredGame>>([] as StoredGame[]);
  const [favs, setFavs] = useState<GameData[]>([]);
  // const [rating, setRating] = useState<GameData[]>([]);

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

  useEffect(() => {
    getGamesList();
  }, []);

  // useEffect(() => {
  //   getGamesList();
  // }, [favs]);
  

  return (
    <FavsAndRatingContext.Provider value={{ favs, favorites, gamesList, setFavs }}>
      {children}
    </FavsAndRatingContext.Provider>
  );
}