import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { devices, mainTheme } from "../../styles/theme";
import { Main } from "../../components/main/MainStyled";

export const HomeMain = styled(Main)`
  height: 100vh;
  justify-content: center;
`;

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

export const HomeButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto auto 60px;
`;

export const HomeButton = styled(Button)`
  margin-top: 20px;
  font-size: 24px;

  @media ${devices.ipad} {
    font-size: 30px;
  }
`;
