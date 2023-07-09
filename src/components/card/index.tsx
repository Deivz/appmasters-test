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
  const [addFavorite, setAddFavorite] = useState<number>(0);

  return (
    <CardContainer>
      <div className='card'>
        <img src={gameInfo.thumbnail} alt={`Thumbnail do jogo ${gameInfo.title}`} />
        <div className='info'>
          <h3>{gameInfo.title}</h3>
          <Favorite favoriting={addFavorite} onFavoriting={(number: number) => setAddFavorite(number)} />
          <Rate rating={rating} onRating={(rate: number) => setRating(rate)} />
        </div>
        <h4>{gameInfo.genre}</h4>
      </div>
    </CardContainer>
  );
}