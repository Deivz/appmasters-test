import { styled } from "styled-components";
import { device } from "../../styles/global";

export const GamesContainer = styled.div`
  margin: 0 auto;
  max-width: 87.5rem;
  width: 96%;

  .filter {
    margin: 1rem 0;
  }

  @media ${device.tablet} {
    .content{
      display: grid;
      column-gap: .5rem;
      row-gap: 2.5rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media ${device.laptop} {
    .content{
      gap: 2.5rem;
    }
  }

  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;

    .filter{
      display: none;
    }

    .content{
      width: 80%;
    }
  }
`

export const MessagesContainer = styled.div`
  margin: 0 auto;
  max-width: 87.5rem;
  width: 96%;
`