import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const TimelineCardStyled = styled.div`
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
  position: relative;

  img {
    width: 64px;
    height: auto;
    outline: 4px solid var(--color-border);
    border-radius: 20px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 44px;
      border-radius: 8px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 24px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 8px;

  span {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-auxiliar);
    color: var(--color-text-paragraph);
  }

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
    line-height: 140%;
    margin-top: 8px;
  }

  & + span {
    position: absolute;
    right: 8px;
    top: -8px;
    font-family: var(--font-bg-card);
    font-weight: 600;
    font-size: 5rem;
    background: radial-gradient(
      109.22% 92.86% at 50.49% 0%,
      rgb(46, 50, 56) 0%,
      rgb(21, 23, 25) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 4px;
    padding: 0px;
  }
`;
