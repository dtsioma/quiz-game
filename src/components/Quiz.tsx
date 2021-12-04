import React, { useState, useEffect } from "react";
import { Question } from "./Question";
import styled from "styled-components";
import { Main } from "./Main";
import { mainTheme } from "../styles/theme";
import { useContext } from "react";
import { AppContext } from "../context";

export interface QuizProgress {
  done: number;
  correct: number;
}

const QuizMain = styled(Main)`
  background-color: ${mainTheme.colors.lavenderWeb};
`;

export const Quiz: React.FC = ({}) => {
  const { state, dispatch } = useContext(AppContext);
  const { done } = state;

  return (
    <QuizMain>
      {done < 10 ? (
        <Question />
      ) : (
        "You are done with the quiz!" // create QuizResult page
      )}
    </QuizMain>
  );
};
