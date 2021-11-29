import React, { useEffect, useState } from "react";
// @ts-ignore
import states from "../states.ts";
import styled from "styled-components";
import { QuizOption } from "./QuizOption";
import { mainTheme } from "../styles/theme";

interface QuestionProps {
  setProgress: React.Dispatch<React.SetStateAction<any>>;
}

interface QuestionOption {
  name: string;
  char: string;
  correct: boolean;
  code: string;
}

type QuestionStatus =
  | "default"
  | "hinted"
  | "answeredCorrectly"
  | "answeredIncorrectly";

const QuestionPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionSubtitle = styled.div`
  font-size: 24px;
  font-weight: medium;
  text-align: center;
`;

const QuestionTitle = styled.div`
  color: ${mainTheme.colors.steelBlue};
  font-size: 48px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const QuizOptionsWrapper = styled.div`
  width: 320px;
  margin: 50px auto 0;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
`;

export const Question: React.FC<QuestionProps> = ({ setProgress }) => {
  const [options, setOptions] = useState<QuestionOption[]>([]);
  const [questionStatus, setQuestionStatus] =
    useState<QuestionStatus>("default");
  const [stateName, setStateName] = useState<string>();
  const [answerIndex, setAnswerIndex] = useState<number>();
  const [subtitle, setSubtitle] = useState<string>("Show me...");

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
    setStateName(opts[anIdx].name);
  };

  const answer = (index: number) => {
    setAnswerIndex(index);
    if (options[index].correct) {
      setQuestionStatus("answeredCorrectly");
      setSubtitle("Correct! This is");
    } else {
      setQuestionStatus("answeredIncorrectly");
      setSubtitle("Incorrect :( This is not");
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
    <>
      <QuestionPrompt>
        <QuestionSubtitle>{subtitle}</QuestionSubtitle>
        <QuestionTitle>{stateName}</QuestionTitle>
      </QuestionPrompt>
      <QuizOptionsWrapper>
        {options.map((opt, index) => {
          return (
            <QuizOption
              name={opt.name}
              variant={getVariant(index)}
              key={opt.code}
              displayName={
                questionStatus === "answeredCorrectly" ||
                questionStatus === "answeredIncorrectly"
              }
              clicked={() => {
                answer(index);
              }}
            >
              {opt.char}
            </QuizOption>
          );
        })}
      </QuizOptionsWrapper>
    </>
  );
};
