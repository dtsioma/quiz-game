import { ProgressStateProps, ThemeStateProps } from "./context";
import { mainTheme } from "./styles/theme";

export type ProgressAction =
  | { type: "ANSWERED_CORRECTLY" }
  | { type: "ANSWERED_INCORRECTLY" }
  | { type: "NOT_ANSWERED" };

export type ThemeAction = { type: "SET_BG_PURPLE" } | { type: "SET_BG_ORANGE" };

export const progressReducer = (
  state: ProgressStateProps,
  action: ProgressAction
) => {
  switch (action.type) {
    case "ANSWERED_CORRECTLY":
      return {
        ...state,
        done: ++state.done,
        correct: ++state.correct,
      };
    case "ANSWERED_INCORRECTLY":
    case "NOT_ANSWERED":
      return {
        ...state,
        done: ++state.done,
      };
    default:
      return state;
  }
};

export const themeReducer = (state: ThemeStateProps, action: ThemeAction) => {
  switch (action.type) {
    case "SET_BG_PURPLE":
      return {
        ...state,
        bgColor: mainTheme.colors.lavenderWeb,
      };
    case "SET_BG_ORANGE":
      return {
        ...state,
        bgColor: mainTheme.colors.macAndCheese,
      };
    default:
      return state;
  }
};
