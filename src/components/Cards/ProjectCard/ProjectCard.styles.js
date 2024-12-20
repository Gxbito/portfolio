import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  width: auto;
  min-width: 340px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 8px 8px 24px 8px;

  background-color: var(--color-bg-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
`;

export const ImageCardContainer = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 16px;
  border-radius: 8px;
`;

export const TextCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 8px;

  span {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: var(--font-size-tags);
    color: var(--color-text-paragraph);
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
  }
`;

export const TagCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0px 8px;
`;
