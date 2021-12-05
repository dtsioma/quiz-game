import React, { useEffect, useContext } from "react";
import { Question } from "../../components/question/Question";
import styled from "styled-components";
import { Main } from "../../components/main/MainStyled";
import { AppContext } from "../../context";

export interface QuizProgress {
  done: number;
  correct: number;
}

const QuizMain = styled(Main)``;

export const Quiz: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
    dispatch({ type: "SHOW_HEADER" });
    dispatch({ type: "RESET_PROGRESS" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuizMain>
      <Question />
    </QuizMain>
  );
};
