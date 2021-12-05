import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import { Main } from "../components/Main";
import { mainTheme } from "../styles/theme";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

const ResultsMain = styled(Main)`
  height: calc(100% - 78px);

  justify-content: center;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: ${mainTheme.colors.steelBlue};
`;

const Score = styled.div`
  font-size: 24px;
  color: ${mainTheme.colors.steelBlue};
  margin-top: 20px;
`;

const ScoreLarge = styled.div`
  font-size: 80px;
  font-weight: bold;
  color: ${mainTheme.colors.steelBlue};
  margin: 10px 0;
`;

const ResultsButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto auto 60px;
`;

const ResultsButton = styled(Button)`
  font-size: 24px;
  margin-top: 20px;
`;

export const Results: React.FC = ({}) => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
    dispatch({ type: "SHOW_HEADER" });
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
