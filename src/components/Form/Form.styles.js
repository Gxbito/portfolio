import styled, { keyframes } from "styled-components";
import { breakpoints } from "@/styles/theme";

export const FormStyled = styled.form`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding: 32px;
  background: var(--color-bg-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ submitted }) => (submitted ? 1 : 0)};
    pointer-events: ${({ submitted }) => (submitted ? "auto" : "none")};
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.6s ease-in-out;
    z-index: 2;
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
    grid-column: span 2;
  }

  button {
    position: relative;
    grid-column: span 2;
    overflow: hidden;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
    gap: 16px;
    display: flex;
    flex-direction: column;
  }
`;

const slideDownFadeIn = keyframes`
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SuccessMessageContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  z-index: 3;

  h2,
  p {
    animation: ${slideDownFadeIn} 0.6s ease-in-out forwards;
    text-align: center;
    cursor: default;
  }

  h2 {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: var(--font-size-header-2);
    color: var(--color-text-title);
    margin-bottom: 12px;
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    line-height: 140%;
    color: var(--color-text-paragraph);
    max-width: 50ch;
  }
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const fill = keyframes`
  100% {
    width: 100%;
  }
`;

export const Spinner = styled.div`
  width: 1.6em;
  height: 1.6em;
  border: 3px solid #fff;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
  z-index: 2;
`;

export const FillBar = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color:rgba(0, 0, 0, 0.44);
  z-index: 1;
  animation: ${fill} 1s ease-in-out forwards;
`;
