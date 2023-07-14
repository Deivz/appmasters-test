import { styled } from "styled-components";
import { device } from "../../styles/global";

export const SelectInputContainer = styled.div`
  position: relative;

  .clear {
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    position: absolute;
    right: 3rem;
    top: 0.7rem;
  }

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