import { useState, useEffect } from "react";
import { GameData, GenreData } from "../pages/games";
import { useGames } from "./useGames";

export default function useFilterByGenre() {

  const { data } = useGames();

  const [filters, setFilters] = useState<GenreData[]>();

  const filterByGenre = (games: Array<GameData>): Array<GenreData> => {
    const genres: Array<GenreData> = [];

    for (let game of games) {
      const hasGenre = genres.find((genre) => genre.label === game.genre);

      if (!hasGenre) {
        genres.push({ value: game.id, label: game.genre });
      }

    }

    return genres;
  }

  useEffect(() => {
    if(data){
      setFilters(filterByGenre(data));
    } else {
      setFilters([]);
    }
  }, [data]);

  return {
    filters
  }
}