import styled from "styled-components";
import { devices } from "./styles/theme";

export const AppWrapper = styled.div.attrs(
  (props: { bgColor: string }) => props
)`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bgColor};
`;

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35px auto 35px;
  justify-items: center;
  align-items: center;
  padding: 40px 20px 0;
  box-sizing: border-box;

  @media ${devices.iphone7Plus} {
    padding: 20px 20px 0;
  }
`;

export const IconButton = styled.button`
  padding: 0;
  background: none;
  cursor: pointer;
  border: none;
  margin: 0;
`;
