import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import GameZone from "./components/GameZone/Main";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GameZone />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
