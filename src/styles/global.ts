import { createGlobalStyle } from "styled-components";

export const breakPoint = {
  mobileS: '20rem',
  mobileM: '23.438rem',
  mobileL: '26.563rem',
  tablet: '48rem',
  laptop: '81.25rem',
  desktop: '90rem'
}

export const device = {
  mobileS: `(min-width: ${breakPoint.mobileS})`,
  mobileM: `(min-width: ${breakPoint.mobileM})`,
  mobileL: `(min-width: ${breakPoint.mobileL})`,
  tablet: `(min-width: ${breakPoint.tablet})`,
  laptop: `(min-width: ${breakPoint.laptop})`,
  desktop: `(min-width: ${breakPoint.desktop})`
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({theme}) =>theme["font-color"]};
    margin: 0;
    font-family: ${({theme}) =>theme["font-family"]};
    padding: 0;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body{
    background-color: ${({theme}) =>theme["body-bg-color"]};
  }

  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: .75rem;
  }

  input {
    color: ${({theme}) =>theme["font-color-input"]};
  }

  label {
    color: ${({theme}) =>theme["font-color"]};
  }

  input[type="radio"] {
    display: none;
  }

  .star {
    cursor: pointer;
    transition: color 200ms;
  }

  .active{
    background-color: rgb(190, 231, 6);
    border: solid .2rem ${({theme}) => theme.red};
    border-radius: .5rem;
    color: rgba(42, 3, 216, 0.884);
  }
`;