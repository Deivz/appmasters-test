import { styled } from "styled-components";

export const SearchBarContainer = styled.form`
  input {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: .5rem;
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
`