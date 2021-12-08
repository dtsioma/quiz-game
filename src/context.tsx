import React, { createContext, useReducer } from "react";
import {
  progressReducer,
  themeReducer,
  ProgressAction,
  ThemeAction,
} from "./reducers";
import { mainTheme } from "./styles/theme";

interface StateProps {
  progress: ProgressStateProps;
  theme: ThemeStateProps;
}

export interface ProgressStateProps {
  done: number;
  correct: number;
  points: number;
  totalSeconds: number;
}

export interface ThemeStateProps {
  bgColor: string;
  showHeader: boolean;
}

const initialState = {
  progress: {
    done: 0,
    correct: 0,
    points: 0,
    totalSeconds: 0,
  },
  theme: {
    bgColor: mainTheme.colors.lavenderWeb,
    showHeader: false,
  },
};

const AppContext = createContext<{
  state: StateProps;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { progress, theme }: StateProps,
  action: ProgressAction | ThemeAction
): StateProps => ({
  progress: progressReducer(progress, action as ProgressAction),
  theme: themeReducer(theme, action as ThemeAction),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
