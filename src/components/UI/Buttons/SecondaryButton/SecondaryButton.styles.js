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
  font-weight: 700;
  font-size: var(--font-size-button);
  color: var(--color-text-title);
  text-decoration: none;

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
