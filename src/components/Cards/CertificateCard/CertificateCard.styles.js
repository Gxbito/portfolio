import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const CertificateCardStyled = styled.div`
  width: auto;
  min-width: 340px;
  height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 8px 8px 24px 8px;

  background-color: var(--color-bg-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover, 0 4px 12px rgba(255, 255, 255, 0.05));
    background-color: var(--color-bg-card-hover);
    border: 1px solid var(--color-border-hover);
  }

  &:active {
    transform: scale(0.99);
    box-shadow: var(--shadow-card-active, 0 0 0 2px rgba(255, 255, 255, 0.1));
    background-color: var(--color-bg-card-active);
    border: 1px solid var(--color-border-active);
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 100%;
    height: 290px;
  }
`;

export const ImageCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px;
  border-radius: 8px;
`;

export const TextCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 8px;

  span {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: var(--font-size-tags);
    color: var(--color-text-paragraph);
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
  }
`;
