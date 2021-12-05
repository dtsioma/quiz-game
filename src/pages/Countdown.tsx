import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Main } from "../components/Main";
import { AppContext } from "../context";
import { mainTheme } from "../styles/theme";

const CountdownMain = styled(Main)`
  padding-bottom: 78px;
  box-sizing: border-box;
  justify-content: center;
  height: calc(100% - 78px);
`;

const CountdownSeconds = styled.div`
  font-size: 150px;
  color: ${mainTheme.colors.steelBlue};
  font-variant-numeric: tabular-nums;
`;

const CountdownCaption = styled.div`
  font-size: 24px;
  color: ${mainTheme.colors.steelBlue};
`;

export const Countdown: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(3);
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "SET_BG_ORANGE" });
    dispatch({ type: "SHOW_HEADER" });
  }, []);

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (secondsLeft > 0) {
      countdownInterval = setInterval(() => {
        setSecondsLeft((secLeft) => secLeft - 1);
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/quiz");
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  });

  return (
    <CountdownMain>
      <CountdownSeconds>
        {secondsLeft > 0 ? `0${secondsLeft}` : "GO!"}
      </CountdownSeconds>
      {secondsLeft > 0 && <CountdownCaption>Get ready!</CountdownCaption>}
    </CountdownMain>
  );
};
