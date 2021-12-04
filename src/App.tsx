import { useContext } from "react";
import styled from "styled-components";
import { AppRoutes } from "./components/AppRoutes";
import { Times } from "./components/icons/Times";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { ProgressBar } from "./components/ProgressBar";
import { AppContext } from "./context";

const Header = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 35px auto 35px;
  justify-items: center;
  align-items: center;
  padding: 0 20px;
  position: absolute;
  top: 0;
  left: 0;
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
  const { done } = state;

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      {pathname !== "/" && (
        <Header>
          <IconButton onClick={goToHome}>
            <Times variant="blue" />
          </IconButton>
          {pathname === "/quiz" && <ProgressBar done={done} />}
        </Header>
      )}
      <AppRoutes />
    </>
  );
}

export default App;
