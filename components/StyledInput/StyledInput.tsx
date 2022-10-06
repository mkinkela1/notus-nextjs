import styled from "styled-components";

interface IInputProps {
  isValid?: boolean;
}

export const StyledLabel = styled.label`
  display: block;
  text-transform: uppercase;
  color: rgba(71, 85, 105);
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input<IInputProps>`
  all: unset;
  box-sizing: border-box;
  display: block;
  outline: none !important;
  padding: 0.75rem;
  color: rgba(71, 85, 105);
  background: #fff;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  transition-timing-function: linear;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border: ${({ isValid }) => (isValid === false ? "1px solid #f00" : "none")};

  &:focus {
    outline: none !important;
  }

  &::placeholder {
    color: rgba(203, 213, 225);
  }
`;
