import styled from "styled-components";
import { Main } from "../../components/main/MainStyled";
import { mainTheme } from "../../styles/theme";

export const CountdownMain = styled(Main)`
  padding-bottom: 78px;
  box-sizing: border-box;
  justify-content: center;
  height: calc(100% - 78px);
`;

export const CountdownSeconds = styled.div`
  font-size: 150px;
  color: ${mainTheme.colors.steelBlue};
  font-variant-numeric: tabular-nums;
`;

export const CountdownCaption = styled.div`
  font-size: 24px;
  color: ${mainTheme.colors.steelBlue};
`;
