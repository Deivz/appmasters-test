import { css, styled } from "styled-components";
import { device } from "../../styles/global";

interface ButtonContainerProps {
  active?: boolean;
  order?: boolean;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  align-items: center;
  border: solid .1rem rgba(255, 255, 255, 0.1);
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  height: 3.5rem;
  justify-content: space-evenly;
  width: 9.75rem;

  p {
    padding-left: .2rem;
  }

  ${({ order }) => order && css`
      border: solid .1rem rgba(204, 54, 154, 0.904);
    `
  }

  ${({ active }) => active && css`
      border: solid .1rem rgba(204, 54, 154, 0.904);
    `
  }

  /* ${({ active, order }) => {
    if ((order && active) || (order && !active)) {
      return css`
        border: solid .1rem rgba(204, 54, 154, 0.904);
      `}
  }
  } */
  

  @media ${device.laptop} {
    &:hover {
      border: solid .1rem rgba(204, 54, 154, 0.904);
    }
  }
`