import { styled } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 25rem;
  width: ${({theme}) => theme["container-width"]};
`