import { GameData, GenreData } from "../pages/games";

export default function useFilterByGenre(){

  const filterByGenre = (games: Array<GameData>): Array<GenreData> => {
    const genres: Array<GenreData> = [{ id: 'todos', title: 'Mostrar Todos' }];

    for (let game of games) {
      const hasGenre = genres.find((genre) => genre.title === game.genre);

      if (!hasGenre) {
        genres.push({ id: game.id, title: game.genre });
      }
    }

    return genres;
  }

  return {
    filterByGenre
  }
}