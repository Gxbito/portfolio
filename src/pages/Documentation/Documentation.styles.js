import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const DocumentationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 60px 54px;
  gap: 60px;

  & > div {
    display: flex;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 40px;
    align-self: start;
    height: calc(100vh - 80px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 0px;

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

export const DocumentationContentsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  gap: 24px;

  h6 {
    font-family: var(--font-secondary);
    font-weight: 700;
    font-size: var(--font-size-header-6);
    color: var(--color-text-title);
  }
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

  a {
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

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    h4 {
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      position: absolute;
      top: 50%;
      transform: translateY(50px);
      transition: all 0.2s ease-in-out;
      z-index: 3;

      font-family: var(--font-secondary);
      font-weight: 500;
      font-size: var(--font-size-header-4);
      color: var(--color-text-title);
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover h4 {
      transform: translateY(0);
      opacity: 1;
    }

    &:active h4 {
      scale: 0.85;
    }

    img {
      transform: translateY(180px);
      border-radius: 8px;
      box-shadow: 0 0 20px 2px ${({ shadow }) => shadow};

      @media (max-width: ${breakpoints.mobile}) {
        max-width: 100%;
        height: auto;
        border-radius: 0px;
      }
    }

    @media (max-width: ${breakpoints.mobile}) {
      & > img:nth-child(1) {
        transform: translateY(260px);
      }

      & > img:nth-child(2) {
        display: none;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 306px;
  }
`;

export const LastImageContainer = styled(MainImageContainer)`
  height: 420px;

  & > div {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ gradientStart, gradientEnd }) =>
      `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`};
  }

  & > div > img {
    transform: translate(0px);
    border-radius: 8px 8px 0px 0px;

    @media (max-width: ${breakpoints.mobile}) {
      border-radius: 0px;
      margin: auto 0;
      height: 140px;
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 264px;
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
        box-shadow: 0 0 20px 2px ${({ shadow }) => shadow};
      }
    }

    @media (max-width: ${breakpoints.mobile}) {
      height: 304px;
    }
  }

  & > div:nth-child(1) > div {
    align-items: flex-end;
  }

  & > div:nth-child(1) > div > img {
    border-radius: 8px 8px 0px 0px;

    @media (max-width: ${breakpoints.mobile}) {
      height: 200px;
      margin: auto 0;
      border-radius: 0px;
    }
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
    gap: 24px;
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

export const DocumentationTagsContainer = styled.div`
  max-width: 195px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  h6 {
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 700;
    font-size: var(--font-size-header-6);
    color: var(--color-text-title);
    margin-bottom: 12px;
  }
`;

export const Separator = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background-color: var(--color-border);
`;
