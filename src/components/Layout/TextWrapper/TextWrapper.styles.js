import styled from "styled-components";

export const TextWrapperStyled = styled.div`
  width: 100%;
  max-width: 765px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  margin: 0 auto 0 0;

  h2 {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: var(--font-size-header-2);
    background: var(--color-text-main-title);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: var(--font-size-header-2);
    color: var(--color-text-title);
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: var(--color-text-paragraph);
    line-height: 140%;
  }
`;
