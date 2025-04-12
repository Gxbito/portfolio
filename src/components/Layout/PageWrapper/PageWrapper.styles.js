import styled from "styled-components";

export const PageWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-bg-page);
  box-shadow: var(--shadow-page);
  border-radius: 24px;
  margin: 40px 40px 40px 0px;
  position: relative;

  & > div:first-child {
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    border-radius: 16px 16px 0px 0px;

    & > div {
      position: relative;
    }
  }

  #bg-home {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  #bg-pattern {
    width: 100%;
    position: absolute;
    top: 0;
    right: -20%;
    z-index: 1;
  }

  #bg-pattern-2 {
    width: 100%;
    position: absolute;
    top: 0;
    right: -25%;
    z-index: 1;
  }

  #bg-light {
    position: absolute;
    left: -10%;
    top: -550px;
    z-index: 1;
  }

  #bg-light-2, #bg-light-2-filter {
    position: absolute;
    left: -25%;
    top: -620px;
    z-index: 1;
  }

  #bg-light-2-filter {
    filter: brightness(70%);
  }

  #bg-light-header {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: ${({ page }) => (page === "documentation" ? "1452px" : "1200px")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ page }) =>
    page === "documentation" ? "60px 0px" : "145px 0px"};
  gap: ${({ page }) => (page === "documentation" ? "60px" : "145px")};
  z-index: 2;
`;
