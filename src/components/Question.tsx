import React, { useEffect, useState } from "react";
// @ts-ignore
import states from "../states.ts";
import styled from "styled-components";
import { QuizOption } from "./QuizOption";

interface QuestionProps {
  setProgress: React.Dispatch<React.SetStateAction<any>>;
}

interface QuestionOption {
  name: string;
  char: string;
  correct: boolean;
  code: string;
}

const QuizOptionsWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
`;

type QuestionStatus =
  | "default"
  | "hinted"
  | "answeredCorrectly"
  | "answeredIncorrectly";

export const Question: React.FC<QuestionProps> = ({ setProgress }) => {
  const [options, setOptions] = useState<QuestionOption[]>([]);
  const [questionStatus, setQuestionStatus] =
    useState<QuestionStatus>("default");
  const [answerIndex, setAnswerIndex] = useState<number>();

  const usedIndices: number[] = [];
  const generateOptions = () => {
    const opts = [];
    for (let i = 0; i < 4; ++i) {
      let idx = -1;
      while (idx === -1 || usedIndices.indexOf(idx) > -1) {
        idx = Math.floor(Math.random() * 51);
      }
      usedIndices.push(idx);
      const newOpt: QuestionOption = {
        name: states[idx].name,
        char: states[idx].char,
        code: states[idx].code,
        correct: false,
      };
      opts.push(newOpt);
    }
    return opts;
  };

  const generateAnswer = (opts: QuestionOption[]) => {
    const anIdx = Math.floor(Math.random() * 4);
    opts[anIdx].correct = true;
  };

  const answer = (index: number) => {
    setAnswerIndex(index);
    if (options[index].correct) {
      setQuestionStatus("answeredCorrectly");
    } else {
      setQuestionStatus("answeredIncorrectly");
    }
  };

  const getVariant = (index: number) => {
    if (questionStatus === "answeredCorrectly") {
      return index === answerIndex ? "correct" : "disabled";
    } else if (questionStatus === "answeredIncorrectly") {
      if (options[index].correct) return "correct";
      else if (index === answerIndex) return "incorrect";
      else return "disabled";
    } else return "default";
  };

  useEffect(() => {
    const myOptions = generateOptions();
    generateAnswer(myOptions);
    setOptions(myOptions);
  }, []);

  return (
    <QuizOptionsWrapper>
      {options.map((opt, index) => {
        return (
          <QuizOption
            name={opt.name}
            variant={getVariant(index)}
            key={opt.code}
            clicked={() => {
              answer(index);
            }}
          >
            {opt.char}
          </QuizOption>
        );
      })}
    </QuizOptionsWrapper>
  );
};
