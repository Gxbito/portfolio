import styled from "styled-components";

export const IconButtonStyled = styled.button`
  max-width: 50px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: none;
  padding: 12px 12px;

  background: var(--color-secondary-button-gradient);
  border-radius: 8px;

  & > img {
    width: 30px;
    height: 30px;
  }
`;
