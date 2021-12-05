import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router";
import {
  ResultsMain,
  ResultsWrapper,
  Title,
  Score,
  ScoreLarge,
  ResultsButtonsWrapper,
  ResultsButton,
} from "./ResultsStyled";

export const Results: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
    dispatch({ type: "SHOW_HEADER" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToHome = () => {
    navigate("/");
  };

  const tryAgain = () => {
    navigate("/countdown");
  };

  return (
    <ResultsMain>
      <ResultsWrapper>
        <Title>Good Job!</Title>
        <Score>Your score is</Score>
        <ScoreLarge>
          {state.progress.correct}/{state.progress.done}
        </ScoreLarge>
      </ResultsWrapper>
      <ResultsButtonsWrapper>
        <ResultsButton variant="blue" width="300px" clicked={goToHome}>
          Main menu
        </ResultsButton>
        <ResultsButton variant="orange" width="300px" clicked={tryAgain}>
          Try again
        </ResultsButton>
      </ResultsButtonsWrapper>
    </ResultsMain>
  );
};
