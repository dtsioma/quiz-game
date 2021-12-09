import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Heading } from "../../components/typography/TypographyStyled";
import { AppContext } from "../../context";
import { HomeButton } from "../home/HomeStyled";
import {
  HighScoresMain,
  ScoresNotFound,
  HighScoresButtonsWrapper,
} from "./HighScoresStyled";

export const HighScores: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const {
    highScores: { scores },
  } = state;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
    dispatch({ type: "SHOW_HEADER" });
  }, []);

  const startQuiz = () => {
    navigate("/countdown", { state: { continue: true } });
  };

  return (
    <HighScoresMain>
      <Heading>High Scores</Heading>
      {scores.length > 0 ? (
        <>High scores found!</>
      ) : (
        <ScoresNotFound>
          You don't have any high scores yet. Let's play your first game!
        </ScoresNotFound>
      )}
      <HighScoresButtonsWrapper>
        <HomeButton width="300px" variant="orange" clicked={startQuiz}>
          Play
        </HomeButton>
        <HomeButton
          width="300px"
          variant="blue"
          clicked={() => {
            navigate("/");
          }}
        >
          Main menu
        </HomeButton>
      </HighScoresButtonsWrapper>
    </HighScoresMain>
  );
};
