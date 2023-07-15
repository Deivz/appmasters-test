import { styled } from "styled-components";
import { device } from "../../styles/global";

export const CardContainer = styled.div`
  position: relative;
  
  & + div {
    margin-top: 2.5rem;
  }

  .pic {
    border-radius: 1rem;
    border: solid .2rem yellow;
    width: 100%;
  }

  .pic:hover{
   border: solid .2rem rgba(204, 54, 154, 0.904);
  }

  .rating {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: .5rem;
    display: flex;
    justify-content: space-between;
    padding: .2rem;
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
    width: 9.375rem;
  }
  
  h3 {
    padding: .75rem;
    /* width: 12.5rem; */
  }
  
  h4 {
    color: rgba(255, 255, 0, 0.7);
    padding: 0 .75rem;
  }

  @media ${device.tablet}{
    display: initial;

    & + div {
      margin-top: 0;
    }
  }
`