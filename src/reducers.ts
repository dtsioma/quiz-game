import { InitialStateProps } from "./context";

type Action =
  | { type: "ANSWERED_CORRECTLY" }
  | { type: "ANSWERED_INCORRECTLY" }
  | { type: "NOT_ANSWERED" };

export const progressReducer = (state: InitialStateProps, action: Action) => {
  switch (action.type) {
    case "ANSWERED_CORRECTLY":
      return {
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
