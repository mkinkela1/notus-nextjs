import React from "react";
import styled from "styled-components";

type AlignItemsTypes = "center" | "start" | "end" | "flex-start" | "flex-end";

interface IProps {
  gap?: number;
  children?: React.ReactNode;
  alignItems?: AlignItemsTypes;
}

const StyledFlex = styled.div<IProps>`
  display: flex;
  gap: ${({ gap }) => gap}px;
  align-items: ${({ alignItems }) => alignItems};
`;

const Flex: React.FC<IProps> = ({ children, ...rest }) => (
  <StyledFlex {...rest}>{children}</StyledFlex>
);

export default Flex;
