import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: `4px`,
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#ffffff",
      contrastText: "#222831",
    },
    secondary: {
      main: "#222831",
      contrastText: "#ffffff",
    },
  },
};

export const GlobalStyle = createGlobalStyle`
`;
