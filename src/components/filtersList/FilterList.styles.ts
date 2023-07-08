import styled from "styled-components";
import { device } from "../../styles/global";

interface FilterListContainerProps {
  active: boolean;
}

export const FilterListContainer = styled.div<FilterListContainerProps>`
  form{
    background-color: rgba(192, 7, 7, .9);
    height: 100vh;
    overflow-x: ${({ active }) => active ? `scroll` : `hidden`};
    position: fixed;
    right: ${({ active }) => active ? '0' : '-90%'};
    top: 0;
    transition: ease-in-out .2s;
  }

  form > span {
    font-size: 2rem;
    left: .8rem;
    position: relative;
    text-align: center;
    top: 1rem;
  }

  ul {
    list-style: none;
    padding-top: 4rem;

    li{
      border-bottom: 1px solid #1a0c57;
      margin: 0 1rem;
      padding-top: 2rem;

      span{
        cursor: pointer;
      }
    }
  }

  @media ${device.desktop} {
    form{
      background-color: rgba(192, 7, 7, .4);
      border-radius: .5rem;
      height: 100vh;
      overflow-x: unset;
      position: initial;
      right: unset;
      top: unset;
      transition: unset;
      
      ul{
        padding-top: 0;
      }
    }

    form > span{
      display: none;
    }

  }
`