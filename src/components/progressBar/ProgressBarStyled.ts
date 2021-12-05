import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const Bar = styled.div`
  width: 250px;
  border-radius: 10px;
  background-color: ${mainTheme.colors.steelBlue};
  height: 25px;
  position: relative;
  overflow: hidden;
`;

export const FilledPortion = styled.div.attrs(
  (props: { done: number }) => props
)`
  border-radius: 10px 0 0 10px;
  width: calc(5% + ${(props) => props.done} * 10%);
  height: 100%;
  background-color: ${mainTheme.colors.macAndCheese};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  transition: all 0.3s ease;
`;
