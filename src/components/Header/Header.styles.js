import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  align-items: center;
  padding: 28px 60px;
  gap: 60px;
  border-radius: 16px 16px 0px 0px;
  background-color: var(--color-bg-card);
  border-bottom: 1px solid var(--color-border);
  position: relative;
  z-index: 2;

  h5 {
    font-weight: 500;
    font-size: var(--font-size-header-5);
    color: var(--color-text-paragraph);
    font-family: var(--font-primary);
    text-align: center;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--color-border);
`;
