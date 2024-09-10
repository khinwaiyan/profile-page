import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html { 
    font-size: 62.5%
    scroll-behavior: smooth;
    }
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
  }
  * {
    box-sizing: border-box;
  }
`;
