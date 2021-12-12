import { useContext } from "react";
import { AppRoutes } from "./components/appRoutes/AppRoutes";
import { Times } from "./components/icons/Times";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { ProgressBar } from "./components/progressBar/ProgressBar";
import { AppContext } from "./context";
import { AppWrapper, Header, IconButton } from "./AppStyled";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("dts__quiz__high_scores")) {
      const localScores = JSON.parse(
        localStorage.getItem("dts__quiz__high_scores") as string
      );
      dispatch({
        type: "UPDATE_HIGH_SCORES",
        payload: { highScores: localScores },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
