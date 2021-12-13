import React from "react";
import styled from "styled-components";

interface ButtonsWrapperProps {
  noMarginTop?: boolean;
}

const BtnsWrapper = styled.div.attrs(
  (props: { noMarginTop?: boolean }) => props
)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${({ noMarginTop }) => (noMarginTop ? 0 : "auto")} auto 40px;
`;

export const ButtonsWrapper: React.FC<ButtonsWrapperProps> = ({
  noMarginTop,
  children,
}) => {
  return <BtnsWrapper noMarginTop={noMarginTop}>{children}</BtnsWrapper>;
};
