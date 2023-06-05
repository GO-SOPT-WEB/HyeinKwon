import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Main from "./components/Main";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
