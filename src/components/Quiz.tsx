import React, { useState, useEffect } from "react";
import { Question } from "./Question";
import styled from "styled-components";
import { Main } from "./Main";
import { mainTheme } from "../styles/theme";
import { ProgressBar } from "./ProgressBar";

export interface QuizProgress {
  done: number;
  correct: number;
}

const QuizMain = styled(Main)`
  background-color: ${mainTheme.colors.lavenderWeb};
`;

const initialProgress: QuizProgress = {
  done: 0,
  correct: 0,
};

export const Quiz: React.FC = ({}) => {
  const [progress, setProgress] = useState<QuizProgress>(initialProgress);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <QuizMain>
      <ProgressBar done={progress.done} />
      {progress.done < 10 ? (
        <Question setProgress={setProgress} />
      ) : (
        "You are done with the quiz!" // create QuizResult page
      )}
    </QuizMain>
  );
};
