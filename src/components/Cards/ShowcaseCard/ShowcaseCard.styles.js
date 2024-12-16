import styled from "styled-components";

export const ShowcaseCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 48px 48px 0px 48px;
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;

  img {
    width: 100%;
    height: 400px;
    border-radius: 16px 16px 0px 0px;
  }
`;

export const ShowcaseDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DataTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  
  h3 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-3);
    color: var(--color-text-title);
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: var(--color-text-paragraph);
  }
`;


