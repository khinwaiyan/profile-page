import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      bg: string;
      text: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      bold: number;
    };
  }
}
