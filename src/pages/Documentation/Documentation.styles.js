import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

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
    top: 60px;
    align-self: start;
    height: fit-content;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;

    & > div:nth-child(2) {
      display: none;
    }
  }
`;

export const DocumentationDataContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  div {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 40px;
  }
`;

export const DocumentationTitltesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  gap: 32px;
`;

export const DocumentationTitle = styled.li`
  font-family: var(--font-secondary);
  font-weight: 500;
  font-size: var(--font-size-button);
  cursor: pointer;

  color: ${({ isActive }) =>
    isActive ? "var(--color-text-title)" : "var(--color-text-paragraph)"};
  text-shadow: ${({ isActive }) =>
    isActive ? "0 0 10px rgba(255, 255, 255, 0.5)" : ""};
  scale: ${({ isActive }) => (isActive ? "1.1" : "1")};
  transform: ${({ isActive }) =>
    isActive ? "translateY(1px)" : "translateY(0px)"};
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-text-title);
    transform: translateY(2px);
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
    max-width: 60ch;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    align-items: flex-start;
    text-align: start;
  }
`;

export const MainImageContainer = styled.div`
  width: 100%;
  height: 675px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  border-radius: 16px;
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 60px;
    overflow: hidden;
    position: relative;

    border-radius: 8px;
    background: ${({ gradientStart, gradientEnd }) =>
      `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`};

    img {
      transform: translateY(180px);
      border-radius: 8px;
      box-shadow: 0 0 20px 2px ${({ shadow }) => shadow};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 306px;
  }
`;

export const LastImageContainer = styled(MainImageContainer)`
  height: 420px;

  & > div > img {
    transform: translate(0px);
    border-radius: 8px 8px 0px 0px;
  }
`;

export const GalleryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  & > div {
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;

    border-radius: 16px;
    background-color: var(--color-bg-card);
    border: 1px solid var(--color-border);

    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 60px;
      overflow: hidden;
      position: relative;

      border-radius: 8px;
      background: ${({ gradientStart, gradientEnd }) =>
        `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`};

      img {
        box-shadow: 0 35px 75px 0 rgba(0, 0, 0, 0.39),
          0 135px 135px 0 rgba(0, 0, 0, 0.34),
          0 300px 180px 0 rgba(0, 0, 0, 0.2),
          0 535px 215px 0 rgba(0, 0, 0, 0.06),
          0 835px 235px 0 rgba(0, 0, 0, 0.01);
      }
    }
  }

  & > div:nth-child(1) > div {
    align-items: flex-end;
  }

  & > div:nth-child(1) > div > img {
    border-radius: 8px 8px 0px 0px;
  }

  & > div:nth-child(2) > div > img,
  & > div:nth-child(3) > div > img {
    width: 100%;
  }

  & > div:first-child {
    grid-column: span 2;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 741px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  h4 {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: var(--font-size-header-4);
    color: var(--color-text-title);
    scroll-margin-top: -100px;
  }

  p {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-large-paragraph);
    color: var(--color-text-paragraph);
    line-height: 140%;
    max-width: 82ch;

    strong {
      color: var(--color-text-title);
      font-weight: 600;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20px;
    gap: 24px;

    li {
      font-family: var(--font-secondary);
      font-weight: 500;
      font-size: var(--font-size-large-paragraph);
      color: var(--color-text-paragraph);
      line-height: 140%;
      max-width: 82ch;

      strong {
        color: var(--color-text-title);
        font-weight: 600;
      }
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Separator = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background-color: var(--color-border);
`;
