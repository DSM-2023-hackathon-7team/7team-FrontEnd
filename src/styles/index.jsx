import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
