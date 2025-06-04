import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  align-items: center;
  padding: 28px 54px;
  gap: 60px;
  border-radius: 16px 16px 0px 0px;
  background-color: var(--color-bg-card);
  border-bottom: 1px solid var(--color-border);
  position: relative;
  z-index: 2;

  h4 {
    font-weight: 500;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
    font-family: var(--font-primary);
    text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 77px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-radius: 0px;
    position: fixed;
    top: 0;
    z-index: 12;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--color-border);

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;
