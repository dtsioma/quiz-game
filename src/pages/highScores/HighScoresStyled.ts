import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const ScoresNotFound = styled.div`
  width: 320px;
  font-size: 24px;
  text-align: center;
  margin: 0 auto;
  line-height: 1.5;
`;

export const TubesWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 90px);
  column-gap: 15px;
  align-items: end;
`;

export const Tube = styled.div.attrs(
  (props: { height: number; variant: "orange" | "blue"; disabled?: boolean }) =>
    props
)`
  background-color: ${(props) =>
    props.variant === "orange"
      ? mainTheme.colors.macAndCheese
      : mainTheme.colors.steelBlue};
  color: ${(props) =>
    props.variant === "orange"
      ? mainTheme.colors.steelBlue
      : mainTheme.colors.macAndCheese};
  height: ${(props) => props.height}px;
  width: 90px;
  font-size: 30px;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:first-child {
    min-height: 132px;
  }

  &:last-child {
    min-height: 66px;
  }
`;
