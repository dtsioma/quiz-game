import { css } from "styled-components";
import { ButtonProps } from "./Button";
import { devices, mainTheme } from "../../styles/theme";

export const BtnStyles = css`
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

  @media ${devices.ipad} {
    font-size: 24px;
  }
`;
