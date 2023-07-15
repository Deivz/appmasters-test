import { styled } from "styled-components";
import { device } from "../../styles/global";

export const MenuButtonContainer = styled.div`
  z-index: 5;

  .bar1, .bar2, .bar3 {
    background-color: rgba(255, 255, 0, 0.7);
    box-shadow: 0 .125rem 1.25rem rgba(255, 255, 0, 0.9);
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
    width: 35px;
  }

  .change .bar1 {
    transform: rotate(-45deg) translate(-9px, 6px) ;
    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: rotate(45deg) translate(-8px, -8px) ;
    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
  }

  @media ${device.laptop} {
    display: none;
  }
`