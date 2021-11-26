import styled from "styled-components";
import { AppRoutes } from "./components/AppRoutes";
import { mainTheme } from "./styles/theme";

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${mainTheme.colors.lavenderWeb};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <Main>
      <AppRoutes />
    </Main>
  );
}

export default App;
