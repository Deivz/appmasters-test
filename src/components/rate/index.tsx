import { useContext } from 'react';
import { BiSolidStar } from 'react-icons/bi';
import { useMemo, useState } from 'react';
import { FavAndRatingContainer } from '../../styles/components/FavAndRating.styles';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/ModalContext';
import useRating from '../../hooks/useRating';
import { GameData } from '../../pages/games';

interface RatingProps {
  count: number;
  rating: number;
  color: {
    filled: string;
    unfilled: string;
  };
  onRating: (number: number) => void;
  game: GameData;
}

Rate.defaultProps = {
  count: 4,
  rating: 0,
  color: {
    filled: "yellow",
    unfilled: "#DCDCDC"
  }
}

export default function Rate({ count, rating, color, onRating, game }: RatingProps) {

  const { user } = useContext(AuthContext);
  const { setModalIsOpen } = useContext(ModalContext);

  const { updateOrCreateGame } = useRating(game);

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
          key={game.id + index}
          onClick={() => {
            if (user) {
              onRating(index);
              updateOrCreateGame(index);
            } else {
              setModalIsOpen(true);
              setHoverRating(0);
              onRating(0);
            }
          }}
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