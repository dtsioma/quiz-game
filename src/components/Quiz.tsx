import React, { useState } from "react";
import { Question } from "./Question";
import styled from "styled-components";
import { Main } from "./Main";
import { mainTheme } from "../styles/theme";

interface QuizProps {}

export interface QuizProgress {
  done: number;
  correct: number;
}

const QuizMain = styled(Main)`
  background-color: ${mainTheme.colors.lavenderWeb};
`;

export const Quiz: React.FC<QuizProps> = ({}) => {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [progress, setProgress] = useState([]);

  return (
    <QuizMain>
      <Question setProgress={setProgress} />
    </QuizMain>
  );
};
