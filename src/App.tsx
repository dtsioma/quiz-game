import { useContext } from "react";
import styled from "styled-components";
import { AppRoutes } from "./components/AppRoutes";
import { Times } from "./components/icons/Times";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { ProgressBar } from "./components/ProgressBar";
import { AppContext } from "./context";

const AppWrapper = styled.div.attrs((props: { bgColor: string }) => props)`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.bgColor};
`;

const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35px auto 35px;
  justify-items: center;
  align-items: center;
  padding: 40px 20px 0;
  box-sizing: border-box;
`;

const IconButton = styled.button`
  padding: 0;
  background: none;
  border: none;
`;

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { state } = useContext(AppContext);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <AppWrapper bgColor={state.theme.bgColor}>
      {pathname !== "/" && (
        <Header>
          <IconButton onClick={goToHome}>
            <Times variant="blue" />
          </IconButton>
          {pathname === "/quiz" && <ProgressBar done={state.progress.done} />}
        </Header>
      )}
      <AppRoutes />
    </AppWrapper>
  );
}

export default App;
