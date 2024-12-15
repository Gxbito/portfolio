import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px 20px;

  background-color: var(--color-input-bg);
  border-radius: 8px;
  border: none;
  outline: none;

  font-family: var(--font-secondary);
  font-weight: 500;
  font-size: var(--font-size-button);
  color: var(--color-input-text);

  &::placeholder {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-button);
    color: var(--color-placeholder);
  }
`;
