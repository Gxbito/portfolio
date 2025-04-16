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
  grid-template-columns: auto 16px auto;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
  position: relative;

  & > :first-child {
    position: sticky;
    top: 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 32px;

    & > :first-child {
      position: initial;
      top: auto;
    }

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
