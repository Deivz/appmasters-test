import { styled } from "styled-components";
import { device } from "../../styles/global";

export const CardContainer = styled.div`
  & + div {
    margin-top: 2.5rem;
  }

  img {
    border-radius: 1rem;
    border: solid .125rem yellow;
    width: 100%;
  }

  img:hover{
   border: solid .2rem rgba(204, 54, 154, 0.904);
  }

  h3 {
    padding: .75rem;
  }

  h4 {
    color: rgba(255, 255, 0, 0.7);
    padding: 0 .75rem;
  }

  @media ${device.tablet}{
    display: initial;

    & + div {
      margin-top: 0;
    }
  }
`