import React, { useState, useEffect } from "react";
import { QuestionOption, QuestionStatus } from "../question/Question";
import { QuizOption } from "../quizOption/QuizOption";
import { OptionsWrapper } from "./RandowQuizOptionsStyled";

const randomOptions: QuestionOption[] = [
  {
    code: "OR",
    char: "k",
    name: "Oregon",
    correct: false,
    hinted: false,
  },
  {
    code: "TX",
    char: "q",
    name: "Texas",
    correct: false,
    hinted: false,
  },
  {
    code: "NY",
    char: "h",
    name: "New York",
    correct: true,
    hinted: false,
  },
  {
    code: "CA",
    char: "E",
    name: "California",
    correct: false,
    hinted: false,
  },
];

export const RandomQuizOptions: React.FC = () => {
  const [options, setOptions] = useState<QuestionOption[]>(randomOptions);
  const [questionStatus, setQuestionStatus] =
    useState<QuestionStatus>("default");
  const [answerIndex, setAnswerIndex] = useState<number>();
  const [runAnimation, setRunAnimation] = useState<number>(0);

  const simulateCorrect = () => {
    setQuestionStatus("answeredCorrectly");
    setAnswerIndex(2);
  };

  const simulateIncorrect = () => {
    setQuestionStatus("answeredIncorrectly");
    setAnswerIndex(0);
  };

  const resetAnswer = () => {
    setAnswerIndex(undefined);
    setQuestionStatus("default");
  };

  const simulateHint = () => {
    const opts = [...options];
    opts[0].hinted = true;
    opts[2].hinted = true;
    setQuestionStatus("hinted");
  };

  const getVariant = (index: number) => {
    if (questionStatus === "answeredCorrectly") {
      return index === answerIndex ? "correct" : "disabled";
    } else if (questionStatus === "answeredIncorrectly") {
      if (index === answerIndex) return "incorrect";
      else return "disabled";
    } else if (questionStatus === "notAnswered") {
      return options[index].correct ? "active" : "disabled";
    } else if (questionStatus === "hinted") {
      return options[index].hinted ? "active" : "disabled";
    } else return "default";
  };

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      isMounted && simulateCorrect();
      setTimeout(() => {
        isMounted && resetAnswer();
        setTimeout(() => {
          isMounted && simulateIncorrect();
          setTimeout(() => {
            isMounted && resetAnswer();
            setTimeout(() => {
              isMounted && simulateHint();
              setTimeout(() => {
                isMounted && simulateCorrect();
                setTimeout(() => {
                  isMounted && resetAnswer();
                  setTimeout(() => {
                    isMounted && simulateHint();
                    setTimeout(() => {
                      isMounted && simulateIncorrect();
                      setTimeout(() => {
                        if (isMounted) {
                          resetAnswer();
                          setRunAnimation((num) => num + 1);
                        }
                      }, 1500);
                    }, 1500);
                  }, 1500);
                }, 1500);
              }, 1500);
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
    }, 1500);

    return () => {
      isMounted = false;
    };
  }, [runAnimation]);

  return (
    <OptionsWrapper>
      {options.map((opt: QuestionOption, index: number) => (
        <QuizOption
          name={opt.name}
          variant={getVariant(index)}
          key={opt.code}
          displayName={false}
          clicked={() => {}}
          mini
        >
          {opt.char}
        </QuizOption>
      ))}
    </OptionsWrapper>
  );
};
