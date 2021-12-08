import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: ${mainTheme.colors.steelBlue};
  margin: 30px 0 0;
`;

export const Paragraph = styled.p.attrs(
  (props: { centered?: boolean }) => props
)`
  font-size: 24px;
  font-weight: 500;
  padding: 0 20px;
  text-align: ${(props) => (props.centered ? "center" : "left")};
`;
