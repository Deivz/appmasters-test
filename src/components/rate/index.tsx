import { BiSolidStar } from 'react-icons/bi';
import { useMemo, useState } from 'react';
import { FavAndRatingContainer } from '../../styles/FavAndRating.styles';

interface RatingProps {
  count: number;
  rating: number;
  color: {
    filled: string;
    unfilled: string;
  };
  onRating: (number: number) => void;
}

Rate.defaultProps = {
  count: 4,
  rating: 0,
  color: {
    filled: "yellow",
    unfilled: "#DCDCDC"
  }
}

export default function Rate({ count, rating, color, onRating }: RatingProps) {

  const [hoverRating, setHoverRating] = useState<number>(0);

  const getColor = (index: number): string => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  }

  const starRating = useMemo(() => {
    return Array(count).fill(0).map((_, arrayIndex) => arrayIndex + 1).map((index) => {
      return (
        <FavAndRatingContainer
          variant={getColor(index)}
          key={index}
          onClick={() => onRating(index)}
          onMouseEnter={() => setHoverRating(index)}
          onMouseLeave={() => setHoverRating(0)}
        >
          <BiSolidStar />
        </FavAndRatingContainer>
      );
    })
  }, [count, rating, hoverRating]);

  return (
    <div>
      {starRating}
    </div>
  )
}