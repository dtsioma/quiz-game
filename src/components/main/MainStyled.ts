import styled from "styled-components";

interface MainProps {
  justifyContent: "center" | "space-between" | "flex-start";
  fullHeight?: boolean;
  withPaddingBottom?: boolean;
}

export const Main = styled.main.attrs((props: MainProps) => props)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props: MainProps) =>
    props.fullHeight ? "100vh" : "calc(100vh - 78px)"};
  justify-content: ${(props: MainProps) =>
    props.justifyContent || "flex-start"};
  padding-bottom: ${(props: MainProps) =>
    props.withPaddingBottom ? "78px" : 0};
  box-sizing: ${(props: MainProps) => props.withPaddingBottom && "border-box"};
`;
