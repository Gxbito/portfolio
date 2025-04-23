import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "@/styles/theme";

export const ShowcaseCardStyled = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  position: relative;

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

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #d3d3d3 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px 16px 0px 16px;
    gap: 24px;
  }
`;

export const ShowcaseDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 60px 0px 60px;
  gap: 60px;

  background: ${({ gradientStart, gradientEnd }) =>
    gradientStart && gradientEnd
      ? `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`
      : "none"};
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 505px;
    border-radius: 8px 8px 0px 0px;
    box-shadow: 0 0 20px 2px ${({ shadow }) => (shadow ? `${shadow}` : "none")};

    @media (max-width: ${breakpoints.mobile}) {
      height: 210px;
    }
  }
`;

export const DataTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  h3 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-3);
    color: ${({ text }) => (text ? `${text}` : "var(--color-text-title)")};
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: ${({ text }) => (text ? `${text}` : "var(--color-text-paragraph)")};
  }
`;
