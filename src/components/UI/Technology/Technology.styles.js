import styled from "styled-components";

export const TechnologyStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  img {
    width: 64px;
    height: auto;
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

  h6 {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-header-6);
    color: var(--color-text-paragraph);
  }
`;