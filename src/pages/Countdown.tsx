import React from "react";
import styled from "styled-components";
import { Main } from "../components/Main";
import { mainTheme } from "../styles/theme";

const CountdownMain = styled(Main)`
  background-color: ${mainTheme.colors.macAndCheese};
`;

export const Countdown: React.FC = () => {
  return <CountdownMain></CountdownMain>;
};
