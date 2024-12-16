import styled from "styled-components";

export const AboutHeroContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 48% 50%;
  justify-content: space-between;

  img {
    width: 100%;
    height: auto;
    padding: 8px;
    background-color: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: 16px;
  }
`;

export const TimelineContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 44% 3% 44%;
  justify-content: space-between;
`;

export const TimelineStrokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
`;

export const TimelineVerticalStroke = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #3b82f6, #000);
  transform: translateX(-50%);
`;

export const TimelinePoint = styled.div`
  position: relative;
  z-index: 2;
  width: 15px;
  height: 15px;
  background-color: #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 10px 4px rgba(59, 130, 246, 0.5);
  margin: 2rem 0;
`;

export const TimelineCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
