import { ProgressStateProps, ThemeStateProps } from "./context";
import { mainTheme } from "./styles/theme";

export type ProgressAction =
  | { type: "ANSWERED_CORRECTLY" }
  | { type: "ANSWERED_INCORRECTLY" }
  | { type: "NOT_ANSWERED" }
  | { type: "RESET_PROGRESS" };

export type ThemeAction =
  | { type: "SET_BG_PURPLE" }
  | { type: "SET_BG_ORANGE" }
  | { type: "SET_BG_BLUE" }
  | { type: "SHOW_HEADER" }
  | { type: "HIDE_HEADER" };

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
    case "RESET_PROGRESS":
      return {
        ...state,
        done: 0,
        correct: 0,
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
    case "SET_BG_BLUE":
      return {
        ...state,
        bgColor: mainTheme.colors.steelBlue,
      };
    case "SHOW_HEADER":
      return {
        ...state,
        showHeader: true,
      };
    case "HIDE_HEADER":
      return {
        ...state,
        showHeader: false,
      };
    default:
      return state;
  }
};
