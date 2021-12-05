import React from "react";
import { Option, OptionName, OptionIcon } from "./QuizOptionStyled";

interface QuizOptionProps {
  name: string;
  variant: "default" | "active" | "disabled" | "correct" | "incorrect";
  displayName: boolean;
  clicked: () => void;
}

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
