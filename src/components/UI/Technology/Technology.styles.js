import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const TechnologyStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  img {
    width: 56px;
    height: auto;
    border-radius: 8px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 44px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
  }
`;

export const TechnologyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  h5 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-5);
    color: var(--color-text-title);
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: var(--color-text-paragraph);
  }
`;
