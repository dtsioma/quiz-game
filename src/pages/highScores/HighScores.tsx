import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Heading } from "../../components/typography/TypographyStyled";
import { AppContext } from "../../context";
import { ScoresNotFound, TubesWrapper, Tube } from "./HighScoresStyled";
import { LargeButton } from "../../components/largeButton/LargeButton";
import { ButtonsWrapper } from "../../components/buttonsWrapper/ButtonsWrapper";
import { Main } from "../../components/main/MainStyled";

export const HighScores: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const {
    highScores: { scores },
  } = state;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
    dispatch({ type: "SHOW_HEADER" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startQuiz = () => {
    navigate("/countdown", { state: { continue: true } });
  };

  return (
    <Main justifyContent="space-between">
      <Heading>High Scores</Heading>
      {scores.length > 0 ? (
        <TubesWrapper>
          {scores[1] ? (
            <Tube height={(300 / scores[0]) * scores[1]} variant="blue">
              {scores[1]}
            </Tube>
          ) : (
            <Tube height={225} variant="blue" disabled>
              ?
            </Tube>
          )}
          <Tube height={300} variant="orange">
            {scores[0]}
          </Tube>
          {scores[2] ? (
            <Tube height={(300 / scores[0]) * scores[2]} variant="blue">
              {scores[2]}
            </Tube>
          ) : (
            <Tube
              height={scores[1] ? (150 / scores[0]) * scores[1] : 150}
              variant="blue"
              disabled
            >
              ?
            </Tube>
          )}
        </TubesWrapper>
      ) : (
        <ScoresNotFound>
          You don't have any high scores yet. Let's play your first game!
        </ScoresNotFound>
      )}
      <ButtonsWrapper noMarginTop>
        <LargeButton width="300px" variant="orange" clicked={startQuiz}>
          Play
        </LargeButton>
        <LargeButton
          width="300px"
          variant="blue"
          clicked={() => {
            navigate("/");
          }}
        >
          Main menu
        </LargeButton>
      </ButtonsWrapper>
    </Main>
  );
};
