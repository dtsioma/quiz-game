import styled, { css } from "styled-components";
import { mainTheme } from "../../styles/theme";
import { Button } from "../button/Button";

export const HintButton = styled(Button)`
  margin: 50px 0;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const NextButton = styled(Button)`
  margin: 50px 0;
`;

export const Timer = styled.div`
  font-weight: medium;
  text-align: center;
  font-variant-numeric: tabular-nums;
  margin-top: 25px;
`;

export const QuestionTimerStyles = css`
  font-size: 60px;
  color: ${({ color }: { color: string }) => {
    if (color === "green") return mainTheme.colors.seaGreenCrayola;
    else if (color === "yellow") return mainTheme.colors.macAndCheese;
    else if (color === "red") return mainTheme.colors.amaranth;
    else return mainTheme.colors.steelBlue;
  }};
  padding: 10px;
`;

export const RestTimer = styled(Timer)`
  font-size: 35px;
  line-height: 41px;
  color: ${mainTheme.colors.steelBlue};
  padding: 25px 10px;
`;

export const QuestionPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionSubtitle = styled.div`
  font-size: 24px;
  font-weight: medium;
  text-align: center;
  margin-top: 10px;
`;

export const QuestionTitle = styled.div`
  color: ${mainTheme.colors.steelBlue};
  font-size: 48px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export const QuizOptionsWrapper = styled.div`
  width: 320px;
  margin: 40px auto 0;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
`;
