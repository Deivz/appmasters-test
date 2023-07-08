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
    color: white;
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    padding: 0;
  }

  body{
    background-color: ${props => props.theme["body-bg-color"]};
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

  .active{
    background-color: rgb(190, 231, 6);
    border: solid .2rem rgba(204, 54, 154, 0.904);
    border-radius: .5rem;
    color: rgba(42, 3, 216, 0.884);
  }
`;