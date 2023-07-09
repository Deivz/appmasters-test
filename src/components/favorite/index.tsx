import { BiSolidHeart } from 'react-icons/bi';
import { useState } from 'react';
import { FavAndRatingContainer } from '../../styles/FavAndRating.styles';

interface RatingProps {
  favoriting: number;
  color: {
    filled: string;
    unfilled: string;
  };
  onFavoriting: (number: number) => void;
}

Favorite.defaultProps = {
  favoriting: 0,
  color: {
    filled: "red",
    unfilled: "#DCDCDC"
  }
}

export default function Favorite({ color, favoriting, onFavoriting }: RatingProps) {

  const [hoverFav, setHoverFav] = useState<number>(0);

  const getColor = (): string => {
    return hoverFav ? color.filled : color.unfilled;
  }

  return (
    <FavAndRatingContainer
      variant={getColor()}
      onClick={() => onFavoriting(1)}
      onMouseEnter={() => setHoverFav(1)}
      onMouseLeave={() => setHoverFav(0)}
    >
      <BiSolidHeart />
    </FavAndRatingContainer>
  )
}