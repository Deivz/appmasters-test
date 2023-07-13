import { useContext } from 'react';
import { BiSolidHeart } from 'react-icons/bi';
import { useMemo, useState } from 'react';
import { FavAndRatingContainer } from '../../styles/components/FavAndRating.styles';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/ModalContext';
import useFavorite from '../../hooks/useFavorites';

interface RatingProps {
  favoriting: number;
  color: {
    filled: string;
    unfilled: string;
  };
  onFavoriting: (number: number) => void;
  gameId: number;
}

Rate.defaultProps = {
  favoriting: 0,
  color: {
    filled: "red",
    unfilled: "#DCDCDC"
  }
}

export default function Rate({ favoriting, color, onFavoriting, gameId }: RatingProps) {

  const { user } = useContext(AuthContext);
  const { setModalIsOpen } = useContext(ModalContext);

  const { updateOrCreateGame } = useFavorite(gameId);

  const [hoverFavoriting, setHoverFavoriting] = useState<number>(0);

  const getColor = (): string => {
    if (hoverFavoriting > 0) {
      return color.filled;
    } else if (!hoverFavoriting && favoriting > 0) {
      return color.filled;
    }

    return color.unfilled;
  }

  const toggleFavoriteAndSend = () => {
    if (favoriting) {
      onFavoriting(0);
      updateOrCreateGame(0);
    } else {
      onFavoriting(1);
      updateOrCreateGame(1);
    }
  }

  const showLoginMessageAndReset = () => {
    setModalIsOpen(true);
    setHoverFavoriting(0);
    onFavoriting(0);
  }

  const addFavorite = useMemo(() => {
    return (
      <FavAndRatingContainer
        variant={getColor()}
        onClick={() => {
          if (user) {
            toggleFavoriteAndSend();
          } else {
            showLoginMessageAndReset()
          }
        }}
        onMouseEnter={() => setHoverFavoriting(1)}
        onPointerLeave={() => setHoverFavoriting(0)}
        onMouseLeave={() => setHoverFavoriting(0)}
      >
        <BiSolidHeart />
      </FavAndRatingContainer>
    );
  }, [favoriting, hoverFavoriting]);

  return (
    <div>
      {addFavorite}
    </div>
  )
}