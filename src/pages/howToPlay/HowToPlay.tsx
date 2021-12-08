import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { RandomQuizOptions } from "../../components/randomQuizOptions/RandomQuizOptions";
import { Heading } from "../../components/typography/TypographyStyled";
import { AppContext } from "../../context";
import {
  HTPMain,
  HTPTextWrapper,
  HTPParagraph,
  HTPButtonsWrapper,
} from "./HowToPlayStyled";
import { HomeButton } from "../home/HomeStyled";

export const HowToPlay: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SHOW_HEADER" });
    dispatch({ type: "SET_BG_PURPLE" });
  }, []);

  const startQuiz = () => {
    navigate("/countdown", { state: { continue: true } });
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <HTPMain>
      <Heading>How To Play</Heading>
      <HTPTextWrapper>
        <HTPParagraph centered>
          One question. Four options. One is correct. And your time is limited.
        </HTPParagraph>
        <HTPParagraph centered>
          For every game, you are given three hints. When hint is used, two
          incorrect options are removed.
        </HTPParagraph>
        <HTPParagraph centered>
          To complete the game, you need to answer ten questions.
        </HTPParagraph>
      </HTPTextWrapper>
      <RandomQuizOptions />
      <HTPButtonsWrapper>
        <HomeButton width="300px" variant="orange" clicked={startQuiz}>
          Play
        </HomeButton>
        <HomeButton width="300px" variant="blue" clicked={goToHomePage}>
          Main menu
        </HomeButton>
      </HTPButtonsWrapper>
    </HTPMain>
  );
};
