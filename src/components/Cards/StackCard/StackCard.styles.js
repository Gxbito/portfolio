import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const StackCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  overflow: hidden;
`;

export const StackTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 24px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-card);

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

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
  }
`;

export const StackContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 32px;
  padding: 32px;
  background-color: var(--color-bg-menu);

  & > a:last-child {
    grid-column: span 2;
    margin-top: 24px;

    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 0px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 32px;
  }
`;
