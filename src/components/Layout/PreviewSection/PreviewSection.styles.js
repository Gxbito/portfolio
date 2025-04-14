import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

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

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    display: block;
    width: 64px;
    height: auto;
    border: 4px solid var(--color-border);
    border-radius: 20px;

    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0px;
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
    font-weight: 500;
    font-size: var(--font-size-header-6);
    color: var(--color-text-paragraph);
  }
`;

export const PreviewSectionCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ sectionType }) =>
    sectionType === "certificates"
      ? "repeat(2, 1fr)"
      : "repeat(auto-fill, minmax(300px, 1fr))"};
  gap: 28px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
