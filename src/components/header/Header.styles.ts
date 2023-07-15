import { css, styled } from "styled-components";
import { device } from "../../styles/global";

interface OverlayProps {
  active?: boolean;
}

export const HeaderContainer = styled.div`
   align-items: center;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 0 auto;
   max-width: 87.5rem;
   padding: .2rem 0;
   position: relative;
   width: 96%;

  h1{
    height: 6.4rem;

    img {
      width: 6rem;
    }
  }

  @media ${device.laptop} {
    span {
      order: 1;
    }
  }
`

export const Overlay = styled.div<OverlayProps>`
  ${({ active }) => active && css`
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      height: 100vh;
      justify-content: center;
      left: 0;
      position: absolute;
      top: 0;
      width: 100vw;
      z-index: 3;
  `}
`