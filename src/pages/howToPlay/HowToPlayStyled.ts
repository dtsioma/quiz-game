import styled from "styled-components";
import { Main } from "../../components/main/MainStyled";
import { Paragraph } from "../../components/typography/TypographyStyled";

export const HTPMain = styled(Main)`
  height: calc(100% - 78px);
`;

export const HTPTextWrapper = styled.div`
  margin-top: 50px;
`;

export const HTPParagraph = styled(Paragraph)`
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const HTPButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto auto 40px;
`;
