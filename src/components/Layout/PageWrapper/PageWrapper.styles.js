import styled from "styled-components";

export const PageWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 145px 40px;
  background-color: var(--color-bg-page);
  box-shadow: var(--shadow-page);
  border-radius: 24px;
  margin: 40px 40px 40px 0px;
  position: relative;
  overflow: hidden;
`;

export const BackgroundLightContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    position: absolute;
    height: 1000px;
    width: auto;
    left: -100px;
    top: -240px;
    filter: blur(100px);
  }
`;

export const BackgroundHomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 145px;
  z-index: 2;
`;