import styled from "styled-components";
import { devices } from "../../styles/theme";
import { Button } from "../button/Button";

export const LargeButton = styled(Button)`
  margin-top: 20px;
  font-size: 24px;

  @media ${devices.ipad} {
    font-size: 30px;
  }
`;
