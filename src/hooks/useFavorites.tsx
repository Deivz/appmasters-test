import { addDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db, gamesCollectionRef } from "../config/firebase";

export default function useFavorite(gameId: number) {

  const checkIfGameAlreadyExists = async (): Promise<string | false> => {
    const getGameId = query(gamesCollectionRef, where("game_id", "==", gameId));
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
      await updateDoc(gameDoc, { favorited: value })
    } else {
      await addDoc(gamesCollectionRef, {game_id: gameId, favorited: value});
    }
  }

  return {
    updateOrCreateGame
  }

}
