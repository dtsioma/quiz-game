import styled from "styled-components";
import { Option, OptionIcon } from "../quizOption/QuizOptionStyled";

export const OptionMini = styled(Option)`
  width: 80px;
  height: 80px;
`;

export const OptionIconMini = styled(OptionIcon)`
  font-size: 51px;
`;

export const OptionsWrapper = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
