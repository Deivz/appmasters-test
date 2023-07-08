import { styled } from "styled-components";
import { device } from "../../styles/global";

export const NavBarContainer = styled.ul`
  align-items: center;
  display: flex;
  font-size: .75rem;
  justify-content: space-between;
  list-style: none;
  width: 98%;

  li a{
    align-items: center;
    display: flex;
    font-size: 1rem;
    height: 2rem;
    justify-content: center;
    padding: 0 .3rem;
    text-decoration: none;
  }

  @media ${device.desktop} {
    li a:hover{
      color: rgba(255, 0, 0, 0.884);
    }
  }

`