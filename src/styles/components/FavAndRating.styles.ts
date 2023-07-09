import { styled } from "styled-components";

interface FavAndRatingContainerProps {
  variant: string;
}

export const FavAndRatingContainer = styled.span<FavAndRatingContainerProps>`
  cursor: pointer;
  font-size: 1.5rem;

  svg {
    path {
      color: ${({variant}) => variant};
    }
  }
`