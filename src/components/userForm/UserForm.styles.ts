import { styled } from "styled-components";

export const FormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 25rem;
  width: ${({theme}) => theme["container-width"]};
`