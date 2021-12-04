import React from "react";
import styled from "styled-components";
import { mainTheme } from "../styles/theme";

interface ButtonProps {
  width?: string;
  variant: "blue" | "orange";
  className?: string;
  clicked?: () => void;
  disabled?: boolean;
}

const Btn = styled.button`
  width: ${(props: ButtonProps) => props.width || "auto"};
  padding: 15px;
  text-align: center;
  background-color: ${(props: ButtonProps) => {
    if (props.variant === "blue") return mainTheme.colors.steelBlue;
    else return mainTheme.colors.macAndCheese;
  }};
  color: ${(props: ButtonProps) => {
    if (props.variant === "blue") return mainTheme.colors.macAndCheese;
    else return mainTheme.colors.steelBlue;
  }};
  border: none;
  font-size: 20px;
  border-radius: 10px;
  opacity: ${(props: ButtonProps) => (props.disabled ? 0.5 : 1)};
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
