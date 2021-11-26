import styled from "styled-components";
import { mainTheme } from "./styles/theme";

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${mainTheme.lavenderWeb};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return <Main>Quiz Game</Main>;
}

export default App;
