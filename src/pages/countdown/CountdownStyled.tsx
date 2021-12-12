import styled from "styled-components";
import { mainTheme, devices } from "../../styles/theme";

export const CountdownSeconds = styled.div`
  font-size: 150px;
  color: ${mainTheme.colors.steelBlue};
  font-variant-numeric: tabular-nums;
`;

export const CountdownCaption = styled.div`
  font-size: 24px;
  color: ${mainTheme.colors.steelBlue};

  @media ${devices.ipad} {
    font-size: 30px;
  }
`;
