import styled from "styled-components";

export const AboutHeroContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 46% 50%;
  justify-content: space-between;

  img {
    width: 100%;
    height: 340px;
    padding: 8px;
    background-color: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const TimelineContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 44% 3% 44%;
  justify-content: space-between;
  align-items: flex-start;

  & > :first-child {
    top: 0;
    z-index: 1;
  }
`;

export const TimelineCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;
