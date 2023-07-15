import { css, styled } from "styled-components";

interface MainContainerProps {
  active?: boolean
}

export const MainContainer = styled.main<MainContainerProps>`
  ${({active}) => active && css`
    overflow-y: scroll;
    position: fixed; 
  `}
`