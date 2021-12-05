import React, { useEffect, useState } from "react";
// @ts-ignore
import states from "../states.ts";
import styled from "styled-components";
import { QuizOption } from "./QuizOption";
import { mainTheme } from "../styles/theme";
import { useContext } from "react";
import { AppContext } from "../context";
import { Button } from "./Button";
import { useNavigate } from "react-router";

interface QuestionOption {
  name: string;
  char: string;
  correct: boolean;
  code: string;
  hinted: boolean;
}

type QuestionStatus =
  | "default"
  | "hinted"
  | "answeredCorrectly"
  | "answeredIncorrectly"
  | "notAnswered";

const Timer = styled.div`
  font-weight: medium;
  text-align: center;
  font-variant-numeric: tabular-nums;
  margin-top: 25px;
`;

const HintButton = styled(Button)`
  margin: 50px 0;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const NextButton = styled(Button)`
  margin: 50px 0;
`;

const QuestionTimer = styled(Timer)`
  font-size: 60px;
  color: ${({ color }) => {
    if (color === "green") return mainTheme.colors.seaGreenCrayola;
    else if (color === "yellow") return mainTheme.colors.macAndCheese;
    else if (color === "red") return mainTheme.colors.amaranth;
    else return mainTheme.colors.steelBlue;
  }};
  padding: 10px;
`;

const RestTimer = styled(Timer)`
  font-size: 35px;
  line-height: 41px;
  color: ${mainTheme.colors.steelBlue};
  padding: 25px 10px;
`;

const QuestionPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionSubtitle = styled.div`
  font-size: 24px;
  font-weight: medium;
  text-align: center;
  margin-top: 10px;
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
  margin: 40px auto 0;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
`;

export const Question: React.FC = () => {
  const [options, setOptions] = useState<QuestionOption[]>([]);
  const [questionStatus, setQuestionStatus] =
    useState<QuestionStatus>("default");
  const [stateName, setStateName] = useState<string>();
  const [answerIndex, setAnswerIndex] = useState<number>();
  const [subtitle, setSubtitle] = useState<string>("Show me...");
  const [secondsLeft, setSecondsLeft] = useState<number>(15);
  const [timerRest, setTimerRest] = useState<boolean>(false);
  const [hintCounter, setHintCounter] = useState<number>(3);
  const navigate = useNavigate();

  const { state, dispatch } = useContext(AppContext);
  const {
    progress: { done },
  } = state;

  useEffect(() => {
    console.log(questionStatus);
  }, [questionStatus]);

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
        hinted: false,
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

  const nextQuestion = () => {
    setAnswerIndex(undefined);
    setQuestionStatus("default");
    setSubtitle("Show me...");
    const myOptions = generateOptions();
    generateAnswer(myOptions);
    setOptions(myOptions);
  };

  const answer = (index: number) => {
    setAnswerIndex(index);
    if (options[index].correct) {
      setQuestionStatus("answeredCorrectly");
      setSubtitle("Correct! This is");
      dispatch({ type: "ANSWERED_CORRECTLY" });
    } else {
      setQuestionStatus("answeredIncorrectly");
      setSubtitle("Incorrect :( This is not");
      dispatch({ type: "ANSWERED_INCORRECTLY" });
    }
    setTimerRest(true);
    setSecondsLeft(5);
  };

  const getVariant = (index: number) => {
    if (questionStatus === "answeredCorrectly") {
      return index === answerIndex ? "correct" : "disabled";
    } else if (questionStatus === "answeredIncorrectly") {
      if (options[index].correct) return "correct";
      else if (index === answerIndex) return "incorrect";
      else return "disabled";
    } else if (questionStatus === "notAnswered") {
      return options[index].correct ? "active" : "disabled";
    } else if (questionStatus === "hinted") {
      return options[index].hinted ? "active" : "disabled";
    } else return "default";
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;
    if (secondsLeft > 1) {
      countdownInterval = setInterval(() => {
        setSecondsLeft((secLeft) => secLeft - 1);
      }, 1000);
    } else {
      setTimeout(() => {
        if (timerRest) {
          setTimerRest(false);
          if (done < 10) {
            nextQuestion();
          } else {
            goToResults();
          }
          setSecondsLeft(15);
        } else {
          setTimerRest(true);
          setSecondsLeft(5);
          setQuestionStatus("notAnswered");
          setSubtitle("This was");
          dispatch({ type: "NOT_ANSWERED" });
        }
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [secondsLeft]);

  const getTimerColor = (seconds: number) => {
    if (seconds > 10) return "green";
    if (seconds > 5) return "yellow";
    else return "red";
  };

  const useHint = () => {
    if (questionStatus !== "default" || hintCounter <= 0) return;
    if (hintCounter <= 0) {
      console.log("no hints left");
    }
    // hint correct
    for (let i = 0; i < 4; ++i) {
      if (options[i].correct) {
        const opts = [...options];
        opts[i].hinted = true;
        setOptions(opts);
      }
    }
    // hint incorrect
    let hintedIncorrect = false;
    do {
      const index = Math.round(Math.random() * 4);
      if (!options[index].correct && !options[index].hinted) {
        const opts = [...options];
        opts[index].hinted = true;
        setOptions(opts);
        hintedIncorrect = true;
      }
    } while (!hintedIncorrect);
    setQuestionStatus("hinted");
    setHintCounter((prev) => prev - 1);
  };

  const goToNextQuestion = () => {
    setTimerRest(false);
    nextQuestion();
    setSecondsLeft(15);
  };

  const goToResults = () => {
    navigate("/results");
  };

  return (
    <>
      {timerRest ? (
        <RestTimer>
          {state.progress.done < 10 ? "Next " : "Results "}
          in {secondsLeft}
        </RestTimer>
      ) : (
        <QuestionTimer color={getTimerColor(secondsLeft)}>
          <>0:</>
          {secondsLeft < 10 && "0"}
          {secondsLeft}
        </QuestionTimer>
      )}
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
                questionStatus === "answeredIncorrectly" ||
                questionStatus === "notAnswered"
              }
              clicked={() => {
                questionStatus !== "answeredCorrectly" &&
                  questionStatus !== "answeredIncorrectly" &&
                  !timerRest &&
                  answer(index);
              }}
            >
              {opt.char}
            </QuizOption>
          );
        })}
      </QuizOptionsWrapper>
      {questionStatus === "answeredCorrectly" ||
      questionStatus === "answeredIncorrectly" ||
      questionStatus === "notAnswered" ? (
        <NextButton
          variant="blue"
          width="300px"
          clicked={done < 10 ? goToNextQuestion : goToResults}
        >
          {done < 10 ? "Next" : "Go to Results"}
        </NextButton>
      ) : (
        <HintButton
          variant="orange"
          clicked={useHint}
          disabled={questionStatus !== "default" || hintCounter <= 0}
        >
          {questionStatus !== "hinted" ? (
            <>
              {hintCounter > 0 ? (
                <>Get a Hint ({hintCounter} left)</>
              ) : (
                <>All hints used</>
              )}
            </>
          ) : (
            <>Hint Used ({hintCounter} left)</>
          )}
        </HintButton>
      )}
    </>
  );
};
