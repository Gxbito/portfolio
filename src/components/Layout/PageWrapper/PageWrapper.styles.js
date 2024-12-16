import styled from "styled-components";

export const PageWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 145px 40px;
  background-color: var(--color-bg-page);
  box-shadow: var(--shadow-page);
  border-radius: 24px;
  margin: 40px 40px 40px 0px;
  position: relative;
  overflow: hidden;
`;

export const BackgroundLightContainer = styled.div`
  width: 100%;
  height: 1000px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  left: 0;
  top: -320px;
  filter: blur(40px);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BackgroundHomeContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
  }
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
