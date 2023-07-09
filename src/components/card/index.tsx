import { useState } from 'react';
import Rate from '../rate';
import { CardContainer } from './Card.styles';
import Favorite from '../favorite';

interface Info {
  gameInfo: CardProps
}

interface CardProps {
  genre: string;
  id: string;
  title: string;
  thumbnail: string;
}

export default function Card({ gameInfo }: Info) {

  const [rating, setRating] = useState<number>(0);
  const [favoriting, setFavoriting] = useState<number>(0);

  return (
    <CardContainer>
      <div className='card'>
        <img className='pic' src={gameInfo.thumbnail} alt={`Thumbnail do jogo ${gameInfo.title}`} />
        <div className='rating'>
          <Rate rating={rating} onRating={(rate: number) => setRating(rate)} />
          <Favorite favoriting={favoriting} onFavoriting={(number: number) => setFavoriting(number)} />
        </div>
        <h3>{gameInfo.title}</h3>
        <h4>{gameInfo.genre}</h4>
      </div>
    </CardContainer>
  );
}