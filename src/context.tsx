import React, { createContext, useReducer } from "react";
import { progressReducer } from "./reducers";

export interface InitialStateProps {
  done: number;
  correct: number;
}

const initialState: InitialStateProps = {
  done: 0,
  correct: 0,
};

const AppContext = createContext<{
  state: InitialStateProps;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
