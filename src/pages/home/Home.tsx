import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context";
import { TextWrapper, Title, Subtitle } from "./HomeStyled";
import { LargeButton } from "../../components/largeButton/LargeButton";
import { ButtonsWrapper } from "../../components/buttonsWrapper/ButtonsWrapper";
import { Main } from "../../components/main/MainStyled";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/countdown", { state: { continue: true } });
  };

  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
    dispatch({ type: "HIDE_HEADER" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main justifyContent="space-between" fullHeight>
      <TextWrapper>
        <Title>State Quiz</Title>
        <Subtitle>How many you can guess?</Subtitle>
      </TextWrapper>
      <ButtonsWrapper>
        <LargeButton
          width="300px"
          variant="blue"
          clicked={() => {
            navigate("/how-to-play");
          }}
        >
          How To Play
        </LargeButton>
        <LargeButton
          width="300px"
          variant="blue"
          clicked={() => {
            navigate("/high-scores");
          }}
        >
          High Scores
        </LargeButton>
        <LargeButton width="300px" variant="orange" clicked={startQuiz}>
          Start
        </LargeButton>
      </ButtonsWrapper>
    </Main>
  );
};
