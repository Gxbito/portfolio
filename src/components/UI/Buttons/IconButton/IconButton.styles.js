import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const IconButtonStyled = styled.button`
  max-width: 50px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: none;
  padding: 12px 12px;

  border: none;
  background: var(--color-secondary-button-gradient);
  border-radius: 8px;

  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-text-title);
  text-decoration: none;

  & > img {
    width: 30px;
    height: 30px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 18px;
      height: 18px;
    }
  }
`;
