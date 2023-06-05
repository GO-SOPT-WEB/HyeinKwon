import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
