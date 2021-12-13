import styled from "styled-components";
import { devices, mainTheme } from "../../styles/theme";

export const Option = styled.div.attrs((props: { mini?: boolean }) => props)`
  width: ${(props) => (props.mini ? "80px" : "150px")};
  height: ${(props) => (props.mini ? "80px" : "150px")};
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

  @media ${devices.iphone7Plus} {
    width: 120px;
    height: 120px;
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

export const OptionIcon = styled.div.attrs(
  (props: { mini?: boolean }) => props
)`
  font-size: ${(props) => (props.mini ? "51px" : "96px")};
  font-family: StateFace;

  @media ${devices.iphone7Plus} {
    font-size: 75px;
  }
`;
