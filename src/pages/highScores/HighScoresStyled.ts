import styled from "styled-components";
import { Main } from "../../components/main/MainStyled";

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
