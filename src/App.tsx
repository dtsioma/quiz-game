import styled from "styled-components";
import { AppRoutes } from "./components/AppRoutes";
import { Times } from "./components/icons/Times";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const Header = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const IconButton = styled.button`
  padding: 0;
  background: none;
  border: none;
`;

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
        </Header>
      )}
      <AppRoutes />
    </>
  );
}

export default App;
