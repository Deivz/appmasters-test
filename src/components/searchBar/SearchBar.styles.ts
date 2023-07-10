import { styled } from "styled-components";
import { device } from "../../styles/global";

export const SearchBarContainer = styled.form`
  width: 100%;
  
  input {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: .5rem;
    color: white;
    font-size: 0.75rem;
    height: 100%;
    padding: .5rem 1rem;
    width: 100%;
  }

  i {
    margin-left: -2rem;
    margin-top: 0.125rem;
    opacity: .9;
    position: absolute;

    img {
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  @media ${device.tablet} {
    width: 80%;
  }
`