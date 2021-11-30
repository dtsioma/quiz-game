import React from "react";
import styled from "styled-components";
import { mainTheme } from "../styles/theme";

interface QuizOptionProps {
  name: string;
  variant: "default" | "active" | "disabled" | "correct" | "incorrect";
  displayName: boolean;
  clicked: () => void;
}

const Option = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &.default {
    background-color: ${mainTheme.colors.steelBlueTransparent};
    color: ${mainTheme.colors.steelBlue};
  }

  &.active {
    background-color: ${mainTheme.colors.steelBlue};
    color: ${mainTheme.colors.macAndCheese};
  }

  &.disabled {
    background-color: ${mainTheme.colors.steelBlueTransparent};
    color: ${mainTheme.colors.steelBlueTransparent};
  }

  &.correct {
    background-color: ${mainTheme.colors.seaGreenCrayola};
    color: ${mainTheme.colors.steelBlue};
  }

  &.incorrect {
    background-color: ${mainTheme.colors.amaranth};
    color: ${mainTheme.colors.steelBlue};
  }
`;

const OptionName = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding: 3px;
  color: white;
  font-size: 12px;
`;

const OptionIcon = styled.div`
  font-size: 96px;
  font-family: StateFace;
`;

export const QuizOption: React.FC<QuizOptionProps> = ({
  name,
  displayName,
  variant,
  children,
  clicked,
}) => {
  return (
    <Option className={variant} onClick={clicked}>
      {displayName && <OptionName>{name}</OptionName>}
      <OptionIcon>{children}</OptionIcon>
    </Option>
  );
};
