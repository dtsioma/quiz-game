import React, { useEffect, useContext } from "react";
import { Question } from "../components/Question";
import styled from "styled-components";
import { Main } from "../components/Main";
import { AppContext } from "../context";
import { Navigate } from "react-router-dom";

export interface QuizProgress {
  done: number;
  correct: number;
}

const QuizMain = styled(Main)``;

export const Quiz: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
    dispatch({ type: "SHOW_HEADER" });
    dispatch({ type: "RESET_PROGRESS" });
  }, []);

  return (
    <QuizMain>
      <Question />
    </QuizMain>
  );
};
