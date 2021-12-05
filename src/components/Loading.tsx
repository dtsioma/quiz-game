import React from "react";
import styled from "styled-components";
import { mainTheme } from "../styles/theme";

const LoadingComponent = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 60px;
  color: ${mainTheme.colors.steelBlue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading: React.FC = () => {
  return <LoadingComponent>Loading...</LoadingComponent>;
};
