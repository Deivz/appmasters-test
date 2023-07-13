import { useState } from 'react';
import Rate from '../rate';
import { CardContainer } from './Card.styles';
import Favorite from '../favorite';

interface Info {
  gameInfo: CardProps
}

interface CardProps {
  genre: string;
  id: number;
  title: string;
  thumbnail: string;
  favorite?: number;
  rate?: number;
}

export default function Card({ gameInfo }: Info) {

  const [rating, setRating] = useState<number | undefined>(gameInfo.rate);
  const [favoriting, setFavoriting] = useState<number | undefined>(gameInfo.favorite);

  return (
    <CardContainer>
      <div className='card'>
        <img className='pic' src={gameInfo.thumbnail} alt={`Thumbnail do jogo ${gameInfo.title}`} />
        <div className='rating'>
          <Rate rating={rating} onRating={(number: number) => setRating(number)} gameId={gameInfo.id} />
          <Favorite favoriting={favoriting} onFavoriting={(number: number) => setFavoriting(number)} gameId={gameInfo.id} />
        </div>
        <h3>{gameInfo.title}</h3>
        <h4>{gameInfo.genre}</h4>
      </div>
    </CardContainer>
  );
}