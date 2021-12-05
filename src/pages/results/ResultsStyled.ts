import styled from "styled-components";
import { Main } from "../../components/main/MainStyled";
import { mainTheme } from "../../styles/theme";
import { Button } from "../../components/button/Button";

export const ResultsMain = styled(Main)`
  height: calc(100% - 78px);
  justify-content: center;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: ${mainTheme.colors.steelBlue};
`;

export const Score = styled.div`
  font-size: 24px;
  color: ${mainTheme.colors.steelBlue};
  margin-top: 20px;
`;

export const ScoreLarge = styled.div`
  font-size: 80px;
  font-weight: bold;
  color: ${mainTheme.colors.steelBlue};
  margin: 10px 0;
`;

export const ResultsButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto auto 60px;
`;

export const ResultsButton = styled(Button)`
  font-size: 24px;
  margin-top: 20px;
`;
