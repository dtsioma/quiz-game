import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const Option = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &.default {
    background-color: ${mainTheme.colors.steelBlueTransparent};
    color: ${mainTheme.colors.steelBlue};
  }

  &.active {
    background-color: ${mainTheme.colors.steelBlue};
    color: ${mainTheme.colors.macAndCheese};
  }

  &.disabled {
    background-color: ${mainTheme.colors.steelBlueTransparent};
    color: ${mainTheme.colors.steelBlueTransparent};
  }

  &.correct {
    background-color: ${mainTheme.colors.seaGreenCrayola};
    color: ${mainTheme.colors.steelBlue};
  }

  &.incorrect {
    background-color: ${mainTheme.colors.amaranth};
    color: ${mainTheme.colors.steelBlue};
  }
`;

export const OptionName = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding: 3px;
  color: white;
  font-size: 12px;
`;

export const OptionIcon = styled.div`
  font-size: 96px;
  font-family: StateFace;
`;
