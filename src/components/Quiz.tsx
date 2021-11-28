import React, { useState } from "react";
import { Question } from "./Question";

interface QuizProps {}

export interface QuizProgress {
  done: number;
  correct: number;
}

export const Quiz: React.FC<QuizProps> = ({}) => {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [progress, setProgress] = useState([]);

  return <Question setProgress={setProgress} />;
};
