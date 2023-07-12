// import { useState } from "react";
import { GameData, GenreData } from "../pages/games";
import { getDocs } from "firebase/firestore";
import { gamesCollectionRef } from "../config/firebase";
import { useEffect, useState } from "react";

interface StoredGame {
  id: string;
  game_id: number;
  favorited: number;
  rated: number;
}

export default function useFilterByGenre() {

  const [gamesList, setGamesList] = useState<Array<StoredGame>>([] as StoredGame[]);

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

  const filterByGenre = (games: Array<GameData>): Array<GenreData> => {
    const genres: Array<GenreData> = [{ id: 0, title: 'Mostrar Todos' }];

    for (let game of games) {
      const hasGenre = genres.find((genre) => genre.title === game.genre);
      const hasFavAndStar = gamesList.find((storedGame) => storedGame.game_id === game.id);

      if (!hasGenre) {
        genres.push({ id: game.id, title: game.genre });
      }
      if (hasFavAndStar){
        Object.assign(game, { favorite: hasFavAndStar.favorited, rated: hasFavAndStar.rated });
      }
    }

    return genres;
  }

  return {
    filterByGenre
  }
}