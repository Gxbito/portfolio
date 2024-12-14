import styled from "styled-components";

export const SecondaryButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  outline: none;
  padding: 16px 20px;

  background-color: var(--color-secondary-button-gradient);
  border: 1px solid var(--color-border);
  border-radius: 8px;

  font-family: var(--font-primary);
  font-weight: 700;
  font-size: var(--font-size-button);
  color: var(--color-text-title);
`;
