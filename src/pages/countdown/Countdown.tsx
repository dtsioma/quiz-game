import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { AppContext } from "../../context";
import { Loading } from "../../components/loading/Loading";
import { CountdownSeconds, CountdownCaption } from "./CountdownStyled";
import { Main } from "../../components/main/MainStyled";

export const Countdown: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(3);
  const [loading, setLoading] = useState<boolean>(true);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (location.state && location.state.continue) {
      dispatch({ type: "SET_BG_ORANGE" });
      dispatch({ type: "SHOW_HEADER" });
      setLoading(false);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (secondsLeft > 0) {
      countdownInterval = setInterval(() => {
        setSecondsLeft((secLeft) => secLeft - 1);
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/quiz", { state: { continue: true } });
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  });

  return loading ? (
    <Loading />
  ) : (
    <Main withPaddingBottom justifyContent="center">
      <CountdownSeconds>
        {secondsLeft > 0 ? `0${secondsLeft}` : "GO!"}
      </CountdownSeconds>
      {secondsLeft > 0 && <CountdownCaption>Get ready!</CountdownCaption>}
    </Main>
  );
};
