import styled from "styled-components";

export const PreviewSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const PreviewSectionData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 64px;
    height: auto;
  }
`;

export const DataTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  h5 {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: var(--font-size-header-5);
    color: var(--color-text-title);
  }

  h6 {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: var(--font-size-header-6);
    color: var(--color-text-paragraph);
  }
`;

export const PreviewSectionCardContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(0, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 28px;
`;


