import { styled } from "styled-components";

export const CustomModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 16rem;
  justify-content: space-evenly;
  margin: auto;

  h4 {
    color: black;
    line-height: 1.4;
  }

  .actions {
    h4 {
      padding-bottom: .75rem;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
    }
  }
`