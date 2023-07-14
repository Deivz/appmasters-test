import { styled } from "styled-components";
import { device } from "../../styles/global";

export const SearchBarContainer = styled.form`
  height: 2.375rem;
  position: relative;
  width: 100%;
  
  input {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: .5rem;
    color: white;
    font-size: 0.75rem;
    height: 100%;
    padding: 0 1rem;
    width: 100%;
  }

  .clear {
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    position: absolute;
    right: 3rem;
    top: 0.7rem;
  }

  i {
    margin-left: -2rem;
    margin-top: 0.5rem;
    opacity: .9;
    position: absolute;

    img {
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  @media ${device.tablet} {
    width: 65%;
  }
  
  @media ${device.desktop} {
    width: 57.5rem
  }
`