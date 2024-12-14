import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  h1 {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: var(--font-size-header-1);
    text-align: center;
    background: var(--color-text-main-title);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-header-5);
    line-height: 140%;
    text-align: center;
    color: var(--color-text-paragraph);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
