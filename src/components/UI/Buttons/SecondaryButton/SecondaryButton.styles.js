import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const SecondaryButtonStyled = styled.button`
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  outline: none;
  padding: 16px 20px;

  background: var(--color-secondary-button-gradient);
  border: 1px solid var(--color-border);
  border-radius: 8px;

  font-family: var(--font-primary);
  font-weight: 500;
  font-size: var(--font-size-button);
  color: var(--color-text-title);
  text-decoration: none;
  transition: all 0.2s ease, transform 0.1s ease;

  &:hover {
    background: var(--color-secondary-button-gradient-hover);
    border-color: var(--color-border-hover);
    transform: translateY(-2px);
  }

  &:active {
    background: var(--color-secondary-button-gradient-active);
    border-color: var(--color-border-active);
    transform: translateY(1px);
  }

  span {
    display: flex;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px 16px;

    span {
      display: none;
    }
  }
`;
