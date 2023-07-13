import { styled } from "styled-components";
import { device } from "../../styles/global";

export const SelectInputContainer = styled.div`
 
  div{
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media ${device.tablet} {
    max-width: 16.25rem;
    width: 100%;
  }

  @media ${device.laptop} {
    max-width: 25rem;
  }
`