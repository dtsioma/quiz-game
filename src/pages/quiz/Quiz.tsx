import React, { useState, useEffect, useContext } from "react";
import { Question } from "../../components/question/Question";
import { Main } from "../../components/main/MainStyled";
import { AppContext } from "../../context";
import { useLocation, useNavigate } from "react-router";
import { Loading } from "../../components/loading/Loading";

export interface QuizProgress {
  done: number;
  correct: number;
}

export const Quiz: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (location.state && location.state.continue) {
      dispatch({ type: "SET_BG_PURPLE" });
      dispatch({ type: "SHOW_HEADER" });
      dispatch({ type: "RESET_PROGRESS" });
      setLoading(false);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Main>
      <Question />
    </Main>
  );
};
