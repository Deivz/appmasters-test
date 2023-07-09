import { styled } from "styled-components";

interface FavAndRatingContainerProps {
  variant: string;
}

export const FavAndRatingContainer = styled.span<FavAndRatingContainerProps>`
  cursor: pointer;
  svg {
    path {
      color: ${({variant}) => variant};
    }
  }
`