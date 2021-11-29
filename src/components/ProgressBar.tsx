import React from "react";
import styled from "styled-components";
import { mainTheme } from "../styles/theme";

interface ProgressBarProps {
  done: number;
}

interface FilledPortionProps {
  done: number;
}

const Bar = styled.div`
  width: 250px;
  border-radius: 10px;
  background-color: ${mainTheme.colors.steelBlue};
  height: 25px;
`;

const FilledPortion = styled.div<FilledPortionProps>`
  border-radius: 10px 0 0 10px;
  width: calc(5% + ${(props) => props.done} * 10%);
  background-color: ${mainTheme.colors.macAndCheese};
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({ done }) => {
  return (
    <Bar>
      <FilledPortion done={done} />
    </Bar>
  );
};
