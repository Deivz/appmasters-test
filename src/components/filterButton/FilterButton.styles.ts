import { styled } from "styled-components";
import { device } from "../../styles/global";

export const ButtonContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  width: 8.75rem;

  p {
    padding-left: .2rem;
  }

  @media ${device.laptop} {
    &:hover {
      border: solid .2rem rgba(204, 54, 154, 0.904);
    }
  }
`