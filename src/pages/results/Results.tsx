import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context";
import { useLocation, useNavigate } from "react-router";
import {
  ResultsMain,
  ResultsWrapper,
  Title,
  Score,
  ScorePoints,
  TotalTime,
} from "./ResultsStyled";
import { LargeButton } from "../../components/largeButton/LargeButton";
import { Loading } from "../../components/loading/Loading";
import { ButtonsWrapper } from "../../components/buttonsWrapper/ButtonsWrapper";

export const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (location.state && location.state.continue) {
      dispatch({ type: "SET_BG_PURPLE" });
      dispatch({ type: "SHOW_HEADER" });
      setLoading(false);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToHome = () => {
    navigate("/");
  };

  const tryAgain = () => {
    navigate("/countdown", { state: { continue: true } });
  };

  return loading ? (
    <Loading />
  ) : (
    <ResultsMain>
      <ResultsWrapper>
        <Title>Good Job!</Title>
        <Score>Your score is</Score>
        <ScorePoints>
          {state.progress.points}
          <small>/100</small>
        </ScorePoints>
        <TotalTime>
          Total time:{" "}
          {state.progress.totalSeconds >= 60 ? (
            <>
              {Math.floor(state.progress.totalSeconds / 60)}:
              {Math.round(state.progress.totalSeconds % 60)}
            </>
          ) : (
            <> {state.progress.totalSeconds} sec</>
          )}
        </TotalTime>
      </ResultsWrapper>
      <ButtonsWrapper>
        <LargeButton variant="blue" width="300px" clicked={goToHome}>
          Main menu
        </LargeButton>
        <LargeButton variant="orange" width="300px" clicked={tryAgain}>
          Try again
        </LargeButton>
      </ButtonsWrapper>
    </ResultsMain>
  );
};
