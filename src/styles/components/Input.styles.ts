import { styled } from "styled-components";
import { device } from "../global";

export const InputContainer = styled.div`
  margin: 1rem auto;

  label {
    display: block;
    margin-bottom: 1rem;
    width: 100%;
  }

  input {
    background: white;
    border: none;
    border-radius: 0.375rem;
    box-shadow: 0 .125rem 1.25rem rgba(31, 10, 147, 0.9);
    height: 2.5rem;
    text-align: center;
    width: 19.5rem;
  }

  input::placeholder {
    font-family: var(--fonte-principal);
    font-size: .75rem;
  }

  @media ${device.tablet} {
    input {
      width: 21.5rem;
    }
    
    input::placeholder {
      font-size: .875rem;
    }
  }

  @media ${device.laptop} {
    input {
        width: 34.5rem;
    }
    
    input::placeholder {
        font-size: 1rem;
    }
  }
`