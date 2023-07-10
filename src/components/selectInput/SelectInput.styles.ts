import { styled } from "styled-components";

export const SelectInputContainer = styled.div`
  .selectInput{
    background-color: black;
    display: flex;
    flex-direction: column;
    height: 120px;
  }

  .select {
    border: none;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    font-family: var(--fonte-principal);
    margin-bottom: 1rem;
    text-align: left;
  }

  .select {
    width: 280px;
  }

  @media (min-width: 768px) {
    .select {
        width: 240px;
    }

    /* .responsible{
        width: 492px;
    } */
  }

  /* @media (min-width: 1440px) {
    .responsible{
        width: 768px;
    }
  } */
`