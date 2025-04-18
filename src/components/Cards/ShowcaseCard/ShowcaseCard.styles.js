import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "@/styles/theme";

export const ShowcaseCardStyled = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 48px 48px 0px 48px;

  box-shadow: var(--shadow-card);
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.2s ease;

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

  img {
    width: 100%;
    height: 400px;
    border-radius: 16px 16px 0px 0px;

    @media (max-width: ${breakpoints.mobile}) {
      height: 210px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px 16px 0px 16px;
    gap: 24px;
  }
`;

export const ShowcaseDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    & > a {
      display: none;
    }
  }
`;

export const DataTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  h3 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-3);
    color: var(--color-text-title);
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: var(--color-text-paragraph);
  }
`;
