import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const TechGroupCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding: 32px;
  background: var(--color-bg-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;

  & > div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 32px;
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
    width: 100%;
    grid-column: span 2;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 24px;
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
`;
