import { styled } from "styled-components";
import { device } from "../../styles/global";

export const PasswordInputContainer = styled.div`
  .icon {
    color: black;
    height: 2.5rem;
    margin-left: -1.5rem;
    margin-top: 0.75rem;
    position: absolute;

    svg {
      path {
        color: rgb(133, 133, 133);
      }
    }
  }
  

  @media ${device.tablet} {
      .icon {
        margin-left: -1.7rem;
      }
  }

  @media ${device.laptop} {
      .icon {
        margin-left: -1.875rem;
      }
    }
`