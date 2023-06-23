import styles from './card.module.css';

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
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img className={styles.img} src={gameInfo.thumbnail} alt={`Thumbnail do jogo ${gameInfo.title}`} />
          <div className={styles.title}>{gameInfo.title}</div>
          <div className={styles.genre}>{gameInfo.genre}</div>
        </div>
      </div>
    </div>
  );
}