import { styled } from "styled-components";
import { device } from "../../styles/global";

interface NavBarContainerProps {
  active: boolean;
}

export const NavBarContainer = styled.ul<NavBarContainerProps>`
  background-color: rgba(192, 7, 7, .9);
  height: 100vh;
  list-style: none;
  overflow-x: ${({ active }) => active ? `scroll` : `hidden`};
  padding-top: 4rem;
  position: fixed;
  right: ${({ active }) => active ? '0' : '-90%'};
  top: 0;
  transition: ease-in-out .2s;
  z-index: 1;

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
    background-color: transparent;
    display: flex;
    height: unset;
    justify-content: space-evenly;
    overflow-x: unset;
    padding-top: 0;
    position: initial;
    right: unset;
    top: unset;
    transition: unset;
    width: 50rem;
    z-index: unset;

    li {
      border-bottom: none;
      margin: unset;
      padding-top: unset;
      
      a {
        text-decoration: none;
      }

      span {
        cursor: pointer;
      }
    }
  }

  /* @media ${device.desktop} {
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

    li a:hover{
      color: rgba(255, 0, 0, 0.884);
    }
  } */

`

// .menu__ativo .nav__menu{
//   overflow: scroll;
//   right: 0;
// }

// .nav__menu{
//   background-color: #fcfbf9;
//   height: 100vh;
//   position: absolute;
//   right: -90%;
//   top: 0;
//   transition: ease-in-out .2s;
// }

// .nav__lista{
//   list-style: none;
//   padding-top: 4rem;
// }

// .nav__item{
//   border-bottom: 1px solid #1a0c57;
//   margin: 0 1rem;
//   padding-top: 2rem;
// }

// .nav__item a{
//   color: black;
//   font-size: 1.2rem;
//   font-weight: bold;
//   text-decoration: none;
// }

// @media (min-width: 1200px){
//   .nav__menu{
//       align-items: center;
//       background-color: transparent;
//       display: flex;
//       height: 80px;
//       position: unset;
//       right: unset;
//       top: unset;
//       transition: none;
//   }

//   .nav__lista{
//       display: flex;
//       padding-top: 0;
//   }

//   .nav__item{
//       border-bottom: none;
//       margin: 0 2.5rem;
//       padding-top: 0;
//   }
// }

// @media (min-width: 1200px){    
//   .navegacao{
//       height: 80px;
//   }
  
//   .container{
//       align-items: center;
//       display: flex;
//       height: 80px;
//       margin: 0 auto;
//       max-width: 1500px;
//       width: 96%;
//   }
  
//   .nav__menu{
//       align-items: center;
//       background-color: transparent;
//       display: flex;
//       height: 80px;
//       justify-content: flex-end;
//       max-width: unset;
//       padding-top: unset;
//       position: unset;
//       right: unset;
//       transition: none;
//       width: 100%;
//   }

//   .nav__lista{
//       display: flex;
//       justify-content: space-around;
//       margin: 0;
//       width: 70%;
//   }
  
//   .nav__item{
//       border-bottom: none;
//       margin: unset;
//       padding-top: unset;
//   }

//   .nav__item a:hover{
//       color: red;
//   }
  
// }