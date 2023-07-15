import { styled } from "styled-components";

export const SelectInputContainer = styled.div`
  margin: 1rem 0;
  position: relative;
  width: 100%;

  .clear {
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    position: absolute;
    right: 3rem;
    top: 0.7rem;
  }

  div{
    background-color: rgba(0, 0, 0, 0.5);

    .css-13cymwt-control {
      border: solid 0.1rem rgba(255, 255, 255, 0.3);
    }

    .css-1jqq78o-placeholder{
      color: white;
    }
  }
`