import React from "react";
import { BtnStyles } from "./ButtonStyled";
import styled from "styled-components";

export interface ButtonProps {
  width?: string;
  variant: "blue" | "orange";
  className?: string;
  clicked?: () => void;
  disabled?: boolean;
}

const Btn = styled.button`
  ${BtnStyles}
`;

export const Button: React.FC<ButtonProps> = ({
  width,
  variant,
  className,
  children,
  clicked,
}) => {
  return (
    <Btn
      className={className}
      width={width}
      variant={variant}
      onClick={clicked}
    >
      {children}
    </Btn>
  );
};
