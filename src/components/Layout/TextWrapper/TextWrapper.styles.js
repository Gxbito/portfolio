import styled from "styled-components";

export const TextWrapperStyled = styled.div`
  width: 100%;
  max-width: 765px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  h2 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: var(--font-size-header-2);
    text-align: center;
    color: var(--color-text-main-title);
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    text-align: center;
    color: var(--color-text-paragraph);
  }
`;
