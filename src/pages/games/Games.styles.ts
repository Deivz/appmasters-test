import { styled } from "styled-components";
import { device } from "../../styles/global";

export const GamesContainer = styled.div`
  margin: 0 auto;
  max-width: 87.5rem;
  width: 96%;

  .filters {
    .actionButtons {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 1rem 0;
      width: 22.5rem;
    }
  }

  @media ${device.tablet} {
    .filters {
      align-self: center;
      display: flex;
      justify-content: space-between;

      .actionButtons {
        align-items: center;
        justify-content: space-between;
      }

      .selectBar{
        width: 50%;
      }
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

    .filters {
      .selectBar{
        width: 54rem;
      }
    }
  }

`

export const MessagesContainer = styled.div`
  margin: 0 auto;
  max-width: 87.5rem;
  width: 96%;
`