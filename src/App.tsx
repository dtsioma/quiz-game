import { useContext } from "react";
import { AppRoutes } from "./components/appRoutes/AppRoutes";
import { Times } from "./components/icons/Times";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { ProgressBar } from "./components/progressBar/ProgressBar";
import { AppContext } from "./context";
import { AppWrapper, Header, IconButton } from "./AppStyled";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { state } = useContext(AppContext);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <AppWrapper bgColor={state.theme.bgColor}>
      {state.theme.showHeader && (
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
