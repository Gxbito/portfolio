import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background-color: var(--color-bg-card);
  border-radius: 0px 0px 16px 16px;
  border-top: 1px solid var(--color-border);

  & > span {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: var(--color-input-text);
  }
`;

export const VerticalBar = styled.span`
  width: 1px;
  height: 100%;
  background-color: var(--color-border);
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  color: var(--color-input-text);
  font-size: 32px;
`;
