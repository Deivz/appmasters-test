import { styled } from "styled-components";
import { device } from "../../styles/global";

interface NavBarContainerProps {
  active: boolean;
}

export const NavBarContainer = styled.ul<NavBarContainerProps>`
  background-color: rgba(192, 7, 7, .9);
  height: 100vh;
  list-style: none;
  overflow-x: ${({ active }) => active ? `hidden` : `scroll`};
  padding-top: 4rem;
  position: fixed;
  right: ${({ active }) => active ? '0' : '-90%'};
  top: 0;
  transition: ease-in-out .2s;
  z-index: 3;

  li {
    border-bottom: .2rem solid #1a0c57;
    margin: 0 1rem;
    padding-top: 2rem;
    
    a {
      text-decoration: none;
    }

    span {
      cursor: pointer;
    }
  }

  @media ${device.laptop} {
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 2.375rem;
    justify-content: space-evenly;
    overflow-x: unset;
    padding-top: 0;
    position: initial;
    right: unset;
    top: unset;
    transition: unset;
    width: 30rem;
    z-index: unset;

    li {
      border-bottom: none;
      margin: unset;
      padding-top: unset;
      
      a {
        padding: .5rem;
        text-decoration: none;
      }
      
      a:hover:not(.active){
        color: red;
      }

      span {
        cursor: pointer;
      }
    }
  }
`