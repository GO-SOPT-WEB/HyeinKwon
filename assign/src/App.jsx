import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import GameZone from "./components/GameZone";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GameZone />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
