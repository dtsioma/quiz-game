import React, { useEffect, useContext } from "react";
import { Question } from "./Question";
import styled from "styled-components";
import { Main } from "./Main";
import { mainTheme } from "../styles/theme";
import { AppContext } from "../context";

export interface QuizProgress {
  done: number;
  correct: number;
}

const QuizMain = styled(Main)``;

export const Quiz: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
  }, []);

  return (
    <QuizMain>
      {state.progress.done < 10 ? (
        <Question />
      ) : (
        "You are done with the quiz!" // create QuizResult page
      )}
    </QuizMain>
  );
};
