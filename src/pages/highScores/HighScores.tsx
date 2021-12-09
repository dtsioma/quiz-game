import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context";

export const HighScores: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "SET_BG_PURPLE" });
    dispatch({ type: "SHOW_HEADER" });
  }, []);

  return <></>;
};
