import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context";
import {
  HomeMain,
  TextWrapper,
  Title,
  Subtitle,
  HomeButton,
} from "./HomeStyled";
import { ButtonsWrapper } from "../../components/buttonsWrapper/ButtonsWrapper";

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
    <HomeMain>
      <TextWrapper>
        <Title>State Quiz</Title>
        <Subtitle>How many you can guess?</Subtitle>
      </TextWrapper>
      <ButtonsWrapper>
        <HomeButton
          width="300px"
          variant="blue"
          clicked={() => {
            navigate("/how-to-play");
          }}
        >
          How To Play
        </HomeButton>
        <HomeButton
          width="300px"
          variant="blue"
          clicked={() => {
            navigate("/high-scores");
          }}
        >
          High Scores
        </HomeButton>
        <HomeButton width="300px" variant="orange" clicked={startQuiz}>
          Start
        </HomeButton>
      </ButtonsWrapper>
    </HomeMain>
  );
};
