import { CardContainer } from './Card.styles';

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
  return (
    <CardContainer>
      <div className='card'>
        <img src={gameInfo.thumbnail} alt={`Thumbnail do jogo ${gameInfo.title}`} />
        <h3>{gameInfo.title}</h3>
        <h4>{gameInfo.genre}</h4>
      </div>
    </CardContainer>
  );
}