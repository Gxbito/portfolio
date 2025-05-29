import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const MenuContainer = styled.nav`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 0px;
  gap: 60px;
  top: 30px;
  position: sticky;
  z-index: 10;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    top: 0;
    background-color: var(--color-bg-main);
    width: 100%;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-border);
  }
`;

export const OwnerDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 56px;
    height: auto;
    display: block;

    @media (max-width: ${breakpoints.mobile}) {
      width: 44px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 12px;
  }
`;

export const OwnerDataTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  h6 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--font-size-header-6);
    color: var(--color-text-title);
    letter-spacing: 0.4px;
  }

  span {
    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-auxiliar);
    color: var(--color-text-paragraph);
    letter-spacing: 0.4px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 4px;
  }
`;

export const NavLinksContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  list-style: none;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100vw;
    height: ${({ active }) => (active ? "423px" : "0px")};
    overflow: hidden;
    flex-direction: column;
    border-bottom: ${({ active }) => (active ? "1px solid var(--color-border)" : "0px")};

    position: absolute;
    left: 0;
    top: 71px;

    background-color: var(--color-bg-main);
    z-index: 10;
    transition: height 0.3s ease, padding 0.1s ease;

    & > div {
      padding: 0px 16px;
    }

    li > a {
      white-space: nowrap;
      transition: all 0.3s ease;

      svg {
        display: block;
        min-width: 14.08px;
      }
    }
  }
`;

export const NavItem = styled.li`
  width: 100%;

  a {
    max-width: 220px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    gap: 16px;
    border-radius: 8px;

    font-family: var(--font-secondary);
    font-weight: 500;
    font-size: var(--font-size-button);
    color: var(--color-text-paragraph);

    transition: all 0.2s ease;
    text-decoration: none;
    cursor: pointer;

    background-color: ${({ active }) =>
      active ? "var(--color-card-button)" : "transparent"};
    color: ${({ active }) =>
      active ? "var(--color-text-title)" : "var(--color-text-paragraph)"};
  }

  a:hover {
    background-color: var(--color-card-button);
    color: var(--color-text-title);
  }

  a:active {
    transform: scale(0.98);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;

    li,
    a {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const MenuLinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 72px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.52);
  z-index: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${({ active }) => (active ? "all" : "none")};
`;
