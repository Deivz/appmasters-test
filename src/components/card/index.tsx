import { useState } from 'react';
import Rate from '../rate';
import { CardContainer } from './Card.styles';
import Favorite from '../favorite';
import { GameData } from '../../pages/games';

interface CardProps {
  game: GameData
}

export default function Card({ game }: CardProps) {

  const [rating, setRating] = useState<number | undefined>(game.rating);
  const [favoriting, setFavoriting] = useState<number | undefined>(game.favorite);

  return (
    <CardContainer>
      <div className='card'>
        <img className='pic' src={game.thumbnail} alt={`Thumbnail do jogo ${game.title}`} />
        <div className='rating'>
          <Rate rating={rating} onRating={(number: number) => setRating(number)} game={game} />
          <Favorite favoriting={favoriting} onFavoriting={(number: number) => setFavoriting(number)} game={game} />
        </div>
        <h3>{game.title}</h3>
        <h4>{game.genre}</h4>
      </div>
    </CardContainer>
  );
}