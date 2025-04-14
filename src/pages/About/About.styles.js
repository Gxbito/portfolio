import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

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

    @media (max-width: ${breakpoints.mobile}) {
      height: 225px;
    }
  }

  & > div:first-child {
    @media (max-width: ${breakpoints.mobile}) {
      display: block;
      order: 2;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const TimelineContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 16px 1fr;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;

  & > :first-child {
    top: 0;
    z-index: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 32px;

    & > div:nth-child(2) {
      display: none;
    }
  }
`;

export const TimelineCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 24px;
  }
`;
