import styled from "styled-components";

export const TextAreaContainer = styled.div`
  width: 100%;
  height: auto;
  grid-column: span 2;
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 16px 20px;

  background-color: var(--color-input-bg);
  border-radius: 8px;
  border: none;
  resize: none;

  font-family: var(--font-secondary);
  font-weight: 500;
  font-size: var(--font-size-button);
  color: var(--color-input-text);

  transition: outline 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-button);
    color: var(--color-placeholder);
  }

  &:hover {
    outline: 1px solid var(--color-border);
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
  }
`;
