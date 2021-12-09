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
  TubesWrapper,
  Tube,
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
        <TubesWrapper>
          {scores[1] && (
            <Tube height={(300 / scores[0]) * scores[1]} variant="blue">
              {scores[1]}
            </Tube>
          )}
          <Tube height={300} variant="orange">
            {scores[0]}
          </Tube>
          {scores[2] && (
            <Tube height={(300 / scores[0]) * scores[2]} variant="blue">
              {scores[2]}
            </Tube>
          )}
        </TubesWrapper>
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