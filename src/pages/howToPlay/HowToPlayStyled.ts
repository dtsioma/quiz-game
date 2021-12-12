import styled from "styled-components";
import { Paragraph } from "../../components/typography/TypographyStyled";

export const HTPTextWrapper = styled.div`
  margin-top: 50px;
`;

export const HTPParagraph = styled(Paragraph)`
  &:not(:first-child) {
    margin-top: 30px;
  }
`;
