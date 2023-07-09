import { styled } from "styled-components";

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 50vh;
  width: ${({theme}) => theme["container-width"]};
`