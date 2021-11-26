import React from "react";
import styled from "styled-components";
// @ts-ignore
import { mainTheme } from "../../styles/theme.ts";

interface ButtonProps {
  width?: string;
  variant: "blue" | "orange";
  className?: string;
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
  font-size: 24px;
  border-radius: 10px;
  margin: auto auto 0;
`;

export const Button: React.FC<ButtonProps> = ({
  width,
  variant,
  className,
  children,
}) => {
  return (
    <Btn className={className} width={width} variant={variant}>
      {children}
    </Btn>
  );
};
