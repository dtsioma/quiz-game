import React from "react";
import { Bar, FilledPortion } from "./ProgressBarStyled";

interface ProgressBarProps {
  done: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ done }) => {
  return (
    <Bar>
      <FilledPortion done={done} />
    </Bar>
  );
};
