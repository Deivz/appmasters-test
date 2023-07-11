import { useContext } from 'react';
import { BiSolidHeart } from 'react-icons/bi';
import { useMemo, useState } from 'react';
import { FavAndRatingContainer } from '../../styles/components/FavAndRating.styles';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/ModalContext';

interface RatingProps {
  count: number;
  favoriting: number;
  color: {
    filled: string;
    unfilled: string;
  };
  onFavoriting: (number: number) => void;
}

Rate.defaultProps = {
  count: 1,
  favoriting: 0,
  color: {
    filled: "red",
    unfilled: "#DCDCDC"
  }
}

export default function Rate({ count, favoriting, color, onFavoriting }: RatingProps) {

  const { user } = useContext(AuthContext);
  const { setModalIsOpen } = useContext(ModalContext);

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
              onFavoriting(index);
            } else {
              setModalIsOpen(true);
              setHoverFavoriting(0);
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