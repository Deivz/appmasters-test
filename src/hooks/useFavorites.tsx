import { addDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db, gamesCollectionRef } from "../config/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { GameData } from "../pages/games";
import { GamesContext } from "../contexts/GamesContext";

export default function useFavorite(game: GameData) {

  const { user } = useContext(AuthContext);
  const { getGamesList } = useContext(GamesContext);

  const checkIfGameAlreadyExists = async (): Promise<string | false> => {
    const getGameId = query(gamesCollectionRef, where("game_id", "==", game.id));
    const checkIfGameExists = await getDocs(getGameId);

    if (checkIfGameExists.size > 0) {
      const storedGame = checkIfGameExists.docs.map((doc) => ({
        id: doc.id
      }));

      const storedGameId = storedGame[0].id;

      return storedGameId;
    }

    return false;
  }

  const updateOrCreateGame = async (value: number) => {
    const storedGame = await checkIfGameAlreadyExists();
    
    if(storedGame){
      const gameDoc = doc(db, 'games', storedGame);
      await updateDoc(gameDoc, { favorited: value, user: user?.email })
    } else {
      await addDoc(gamesCollectionRef, {game_id: game.id, favorited: value, user: user?.email});
    }
    getGamesList();
  }

  return {
    updateOrCreateGame
  }

}
