import styled from "styled-components";
import { mainTheme } from "../../styles/theme";

export const LoadingComponent = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 60px;
  color: ${mainTheme.colors.steelBlue};
  display: flex;
  align-items: center;
  justify-content: center;
`;
