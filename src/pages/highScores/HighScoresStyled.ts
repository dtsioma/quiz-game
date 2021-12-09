import styled from "styled-components";
import { Main } from "../../components/main/MainStyled";
import { mainTheme } from "../../styles/theme";

export const HighScoresMain = styled(Main)`
  height: calc(100% - 78px);
  justify-content: space-between;
`;

export const ScoresNotFound = styled.div`
  width: 320px;
  font-size: 24px;
  text-align: center;
  margin: 0 auto;
  line-height: 1.5;
`;

export const HighScoresButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 40px;
`;

export const TubesWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Tube = styled.div.attrs(
  (props: { height: number; variant: "orange" | "blue" }) => props
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
`;
