import styled from "styled-components";

export const DocumentationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;

  & > div {
    display: flex;
  }

  & > div:nth-child(2) {
    position: sticky;
    top: 100px;
    align-self: start;
    height: fit-content;
  }
`;

export const DocumentationDataContainer = styled.div`
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  img {
    display: block;
    padding: 12px;
    border-radius: 16px;
    border: 1px solid var(--color-border);
    background-color: var(--color-bg-card);
    width: 100%;
    height: 416px;
  }

  & > img:nth-child(2) {
    height: 588px;
  }
`;

export const DocumentationTitltesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  gap: 48px;

  li {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-button);
    color: var(--color-text-paragraph);
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;

  h2 {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: var(--font-size-header-2);
    background: var(--color-text-main-title);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h5 {
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: var(--font-size-header-5);
    color: var(--color-text-title);
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: var(--color-text-paragraph);
    line-height: 140%;
  }
`;

export const GalleryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  img {
    display: block;
    padding: 12px;
    border-radius: 16px;
    border: 1px solid var(--color-border);
    background-color: var(--color-bg-card);
    width: 100%;
    height: 416px;
  }

  & > img:first-child {
    grid-column: span 2;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 170px;

  h4 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: var(--color-text-paragraph);
    line-height: 140%;
  }
`;

export const Separator = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background-color: var(--color-border);
`;
