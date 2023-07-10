import { styled } from "styled-components";
import { device } from "../../styles/global";

export const GamesContainer = styled.div`
  margin: 0 auto;
  max-width: 87.5rem;
  width: 96%;

  .filter {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 5rem;
    justify-content: space-evenly;
  }

  @media ${device.tablet} {
    .filter {
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;
    }

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