import styled from "styled-components";
import { devices, mainTheme } from "../../styles/theme";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin: 0 0 8px;
  color: ${mainTheme.colors.steelBlue};

  @media ${devices.ipad} {
    font-size: 80px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  color: ${mainTheme.colors.steelBlue};
  font-weight: 500;
  margin: 0;

  @media ${devices.ipad} {
    font-size: 30px;
  }
`;
