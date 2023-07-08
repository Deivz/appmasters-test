import { styled } from "styled-components";
import { device } from "../../styles/global";

export const HeaderContainer = styled.div`
   align-items: center;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 0 auto;
   max-width: 87.5rem;
   padding: .2rem 0;
   width: 96%;

  h1{
    height: 6.4rem;

    img {
      width: 6rem;
    }
  }
  
  .searchBar {
    width: calc(96% - 6rem);
  }

  .navBar {
    align-items: center;
    display: flex;
    height: 4rem;
    justify-content: center;
    width: 100%;
  }

  @media ${device.tablet} {
    .navBar {
      width: 50%;
    }

    .searchBar {
      width: 30%;
    }
  }
`