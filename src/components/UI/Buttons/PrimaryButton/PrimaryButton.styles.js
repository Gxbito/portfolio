import styled from "styled-components";

export const PrimaryButtonStyled = styled.div`
  cursor: pointer;
  outline: none;
  padding: 16px 20px;

  background: var(--color-primary-button-gradient);
  background-size: 150%;
  box-shadow: var(--shadow-button);
  border: none;
  border-radius: 8px;

  font-family: var(--font-primary);
  font-weight: 700;
  font-size: var(--font-size-button);
  color: var(--color-text-title);
`;
