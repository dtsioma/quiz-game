import React from "react";
import { Option, OptionName, OptionIcon } from "./QuizOptionStyled";

interface QuizOptionProps {
  name: string;
  variant: "default" | "active" | "disabled" | "correct" | "incorrect";
  mini?: boolean;
  displayName: boolean;
  clicked: () => void;
}

export const QuizOption: React.FC<QuizOptionProps> = ({
  name,
  displayName,
  mini,
  variant,
  children,
  clicked,
}) => {
  return (
    <Option className={variant} onClick={clicked} mini={mini}>
      {displayName && <OptionName>{name}</OptionName>}
      <OptionIcon mini={mini}>{children}</OptionIcon>
    </Option>
  );
};
