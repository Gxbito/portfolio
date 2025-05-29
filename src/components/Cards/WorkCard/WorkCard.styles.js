import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "@/styles/theme";

export const WorkCardStyled = styled(Link)`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 8px;
  position: relative;

  background-color: var(--color-bg-card);
  box-shadow: var(--shadow-card);
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
    height: 420px;
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
  position: relative;
  overflow: hidden;

  background-color: ${({ gradientStart }) => gradientStart};
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    width: 326px;
    height: 326px;
    top: -50%;
    left: calc(100% / 2 - (326px / 2));
    background-color: ${({ gradientEnd }) => gradientEnd};
    border-radius: 100%;
    z-index: 1;
    filter: blur(70px);
    transition: all 0.2s ease;
  }

  &:hover {
    &::before {
      filter: blur(80px);
    }

    & > img:first-child {
      transform: translateX(5px) translateY(-5px);
    }
  }

  & > div {
    z-index: 2;
  }

  & > img:first-child {
    position: absolute;
    top: 20%;
    left: 0;
    transition: all 0.2s ease;
  }
`;

export const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: calc(100% / 2 - 60px);
  left: calc(100% / 2 - 60px);

  outline: 6px solid ${({ borderColor }) => borderColor};
  border-radius: 20px;
  background-color: ${({ gradientStart }) => gradientStart};
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.15),
    0 27px 27px 0 rgba(0, 0, 0, 0.13), 0 61px 37px 0 rgba(0, 0, 0, 0.08),
    0 109px 44px 0 rgba(0, 0, 0, 0.02), 0 170px 48px 0 rgba(0, 0, 0, 0);
`;

export const TextCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  span {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: var(--font-size-tags);
    color: var(--color-text-paragraph);
    text-transform: uppercase;
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
  }
`;
