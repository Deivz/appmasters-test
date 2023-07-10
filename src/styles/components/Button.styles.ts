import { styled } from "styled-components";
import { device } from "../global";

export const ButtonContainer = styled.span`
  a {
    text-decoration: none;
  }
  
  input {
    align-items: center;
    background-color: ${({theme}) => theme.red};
    border: none;
    border-radius: 0.375rem;
    box-shadow: 0 .125rem 1.25rem rgba(187, 11, 28, 0.9);
    color: ${({theme}) => theme["font-color"]};
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    height: 2.5rem;
    justify-content: center;
    margin: 1rem auto;
    text-decoration: none;
    width: 9.25rem;

    

    
  }

  @media ${device.tablet}{
    input {
        width: 10.25rem;
    }
  }

  @media ${device.laptop} {
    input {
      width: 10.875rem;
    }
  }
`