import React, { useEffect } from "react";
import { useContext } from "react";
import { RandomQuizOptions } from "../../components/randomQuizOptions/RandomQuizOptions";
import {
  Heading,
  Paragraph,
} from "../../components/typography/TypographyStyled";
import { AppContext } from "../../context";
import { HTPMain, HTPTextWrapper } from "./HowToPlayStyled";

export const HowToPlay: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "SHOW_HEADER" });
    dispatch({ type: "SET_BG_PURPLE" });
  }, []);

  return (
    <HTPMain>
      <Heading>How To Play</Heading>
      <HTPTextWrapper>
        <Paragraph centered>
          One question. Four options. One is correct. And your time is limited.
        </Paragraph>
        <Paragraph centered>
          For every game, you are given three hints. When hint is used, two
          incorrect options are removed.
        </Paragraph>
        <Paragraph centered>
          To complete the game, you need to answer ten questions.
        </Paragraph>
      </HTPTextWrapper>
      <RandomQuizOptions />
    </HTPMain>
  );
};
