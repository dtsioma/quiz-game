import React from "react";
import styled from "styled-components";
import { Button } from "../components/buttons/Button";
import { mainTheme } from "../styles/theme";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin: 0 0 8px;
  color: ${mainTheme.colors.steelBlue};
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: ${mainTheme.colors.steelBlue};
  font-weight: 500;
  margin: 0;
`;

const HomeButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto auto 60px;
`;

const HomeButton = styled(Button)`
  margin-top: 20px;
`;

export const Home: React.FC = () => {
  return (
    <>
      <TextWrapper>
        <Title>State Quiz</Title>
        <Subtitle>How many you can guess?</Subtitle>
      </TextWrapper>
      <HomeButtonsWrapper>
        <HomeButton width="300px" variant="orange">
          Start
        </HomeButton>
      </HomeButtonsWrapper>
    </>
  );
};
