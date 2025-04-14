import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const ShortcutCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 24px;
  background: var(--color-bg-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;

  img {
    width: 64px;
    height: auto;
    border: 4px solid var(--color-border);
    border-radius: 20px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 44px;
      border-radius: 8px;
    }
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;

    @media (max-width: ${breakpoints.mobile}) {
      gap: 16px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
    gap: 32px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  h4 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-medium-paragraph);
    color: var(--color-text-paragraph);
  }
`;
