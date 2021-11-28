import React, { useEffect, useState } from "react";
// @ts-ignore
import states from "../states.ts";

interface QuestionProps {
  setProgress: React.Dispatch<React.SetStateAction<any>>;
}

export const Question: React.FC<QuestionProps> = ({ setProgress }) => {
  const [options, setOptions] = useState<string[]>([]);
  const [answerIdx, setAnswerIdx] = useState<number>(-1);
  const usedIndices: number[] = [];
  const generateOptions = () => {
    const opts = [];
    for (let i = 0; i < 4; ++i) {
      let idx = -1;
      while (idx === -1 || usedIndices.indexOf(idx) > -1) {
        idx = Math.floor(Math.random() * 51);
      }
      usedIndices.push(idx);
      opts.push(states[idx].name);
      console.log(states[idx].name);
    }
    return opts;
  };

  const generateAnswer = (opts: string[]) => {
    const anIdx = Math.floor(Math.random() * 4);
    return anIdx;
  };

  useEffect(() => {
    const myOptions = generateOptions();
    const myAnswer = generateAnswer(myOptions);
    console.log({ myOptions, myAnswer });
  }, []);

  return <div></div>;
};
