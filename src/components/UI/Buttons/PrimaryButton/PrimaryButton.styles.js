import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const PrimaryButtonStyled = styled.button`
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  outline: none;
  padding: 16px 20px;

  background: var(--color-primary-button-gradient);
  box-shadow: var(--shadow-button);
  border: none;
  border-radius: 8px;

  font-family: var(--font-primary);
  font-weight: 500;
  font-size: var(--font-size-button);
  color: var(--color-text-title);
  text-decoration: none;
  transition: all 0.2s ease, transform 0.1s ease;

  &:hover {
    background: var(--color-primary-button-gradient-hover);
    box-shadow: var(--shadow-button-hover);
    transform: translateY(-2px);
  }

  &:active {
    background: var(--color-primary-button-gradient-active);
    box-shadow: var(--shadow-button-active);
    transform: translateY(1px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px 16px;
  }
`;
