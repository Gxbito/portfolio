import styled from "styled-components";

export const MenuContainer = styled.nav`
  width: 100%;
  max-width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 52px 40px;
  gap: 60px;
`;

export const OwnerDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 48px;
    height: auto;
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
`;

export const NavLinksContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  li {
    width: 100%;
    list-style: none;

    a:hover {
      background-color: var(--color-card-button);
      color: var(--color-text-title);
    }
  }

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
  }
`;
