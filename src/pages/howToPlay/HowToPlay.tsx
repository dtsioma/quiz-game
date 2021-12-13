import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { RandomQuizOptions } from "../../components/randomQuizOptions/RandomQuizOptions";
import { Heading } from "../../components/typography/TypographyStyled";
import { AppContext } from "../../context";
import { HTPTextWrapper, HTPParagraph } from "./HowToPlayStyled";
import { LargeButton } from "../../components/largeButton/LargeButton";
import { ButtonsWrapper } from "../../components/buttonsWrapper/ButtonsWrapper";
import { Main } from "../../components/main/MainStyled";

export const HowToPlay: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SHOW_HEADER" });
    dispatch({ type: "SET_BG_PURPLE" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startQuiz = () => {
    navigate("/countdown", { state: { continue: true } });
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <Main>
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
      <ButtonsWrapper>
        <LargeButton width="300px" variant="orange" clicked={startQuiz}>
          Play
        </LargeButton>
        <LargeButton width="300px" variant="blue" clicked={goToHomePage}>
          Main menu
        </LargeButton>
      </ButtonsWrapper>
    </Main>
  );
};
