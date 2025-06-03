import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const ServiceCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 32px;
  background: var(--color-bg-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;

  img {
    width: 64px;
    height: auto;
    outline: 4px solid var(--color-border);
    border-radius: 8px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 44px;
      border-radius: 8px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px;
    gap: 24px;
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
    font-size: var(--font-size-large-paragraph);
    color: var(--color-text-paragraph);
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 16px;

  li {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-medium-paragraph);
    color: var(--color-text-title);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
