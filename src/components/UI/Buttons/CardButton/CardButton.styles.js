import styled from "styled-components";

export const CardButtonStyled = styled.button`
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  outline: none;
  padding: 16px 20px;

  background-color: var(--color-card-button);
  border: none;
  border-radius: 8px;

  font-family: var(--font-primary);
  font-weight: 500;
  font-size: var(--font-size-button);
  color: var(--color-text-title);
  text-decoration: none;

  transition: all 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: var(--color-card-button-hover);
    transform: translateY(-1px);
  }

  &:active {
    background-color: var(--color-card-button-active);
    transform: translateY(1px);
  }
`;