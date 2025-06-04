import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  position: relative;
  height: 100%;
  gap: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: var(--color-border);
  border-radius: 100px;
`;

export const Dot = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-border);
  border-radius: 100%;
  background-color: var(--color-primary);
`;

export const LineContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
  gap: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 24px;
  background: var(--color-bg-card);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
`;
