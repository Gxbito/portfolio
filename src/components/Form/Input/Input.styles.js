import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px 20px;
  padding-top: 24px;

  background-color: var(--color-input-bg);
  outline: ${({ error }) => (error ? "1px solid red" : "none")};
  border: none;
  border-radius: 8px;

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
    border: none;
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
    border: none;
  }
`;

export const FloatingLabel = styled.label`
  position: absolute;
  left: 20px;
  top: ${(props) => (props.isFocused ? "0px" : "16px")};
  z-index: 2;

  border-radius: 4px;
  pointer-events: none;
  padding: 4px 0px;
  transition: all 0.2s ease;

  font-size: ${(props) =>
    props.isFocused ? "var(--font-size-tags)" : "var(--font-size-button)"};
  color: ${(props) =>
    props.isFocused ? "var(--color-primary)" : "var(--color-placeholder)"};
  font-family: var(--font-secondary);
  font-weight: 500;
`;