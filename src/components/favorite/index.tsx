import { useContext } from 'react';
import { BiSolidHeart } from 'react-icons/bi';
import { useMemo, useState } from 'react';
import { FavAndRatingContainer } from '../../styles/components/FavAndRating.styles';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/ModalContext';
import useFavorite from '../../hooks/useFavorites';

interface RatingProps {
  count: number;
  favoriting: number;
  color: {
    filled: string;
    unfilled: string;
  };
  onFavoriting: (number: number) => void;
  gameId: number;
}

Rate.defaultProps = {
  count: 1,
  favoriting: 0,
  color: {
    filled: "red",
    unfilled: "#DCDCDC"
  }
}

export default function Rate({ count, favoriting, color, onFavoriting, gameId }: RatingProps) {

  const { user } = useContext(AuthContext);
  const { setModalIsOpen } = useContext(ModalContext);

  const { updateOrCreateGame } = useFavorite(gameId);

  const [hoverFavoriting, setHoverFavoriting] = useState<number>(0);

  const getColor = (index: number): string => {
    if (hoverFavoriting >= index) {
      return color.filled;
    } else if (!hoverFavoriting && favoriting >= index) {
      return color.filled;
    }

    return color.unfilled;
  }

  const addFavorite = useMemo(() => {
    return Array(count).fill(0).map((_, arrayIndex) => arrayIndex + 1).map((index) => {
      return (
        <FavAndRatingContainer
          variant={getColor(index)}
          key={index}
          onClick={() => {
            if (user) {
              if (favoriting) {
                onFavoriting(0);
                updateOrCreateGame(0);
              } else {
                onFavoriting(index);
                updateOrCreateGame(index);
              }
            } else {
              setModalIsOpen(true);
              setHoverFavoriting(0);
              onFavoriting(0);
            }
          }}
          onMouseEnter={() => setHoverFavoriting(index)}
          onMouseLeave={() => setHoverFavoriting(0)}
        >
          <BiSolidHeart />
        </FavAndRatingContainer>
      );
    })
  }, [count, favoriting, hoverFavoriting]);

  return (
    <div>
      {addFavorite}
    </div>
  )
}