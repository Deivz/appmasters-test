import { styled } from "styled-components";
import { device } from "../../styles/global";

export const GamesContainer = styled.div`
  margin: 0 auto;
  max-width: 87.5rem;
  width: 96%;

  .filter {
    display: flex;
    flex-direction: column;
    height: 5.5rem;
    justify-content: space-between;
    margin: 1rem 0;
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

`

export const MessagesContainer = styled.div`
  margin: 0 auto;
  max-width: 87.5rem;
  width: 96%;
`