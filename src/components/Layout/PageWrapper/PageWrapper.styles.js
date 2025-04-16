import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

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
  position: relative;

  & > div:first-child {
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    border-radius: 16px 16px 0px 0px;

    @media (max-width: ${breakpoints.mobile}) {
      border-radius: 0px;
    }

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

    @media (max-width: ${breakpoints.mobile}) {
      width: 800px;
      right: -400px;
    }
  }

  #bg-pattern-2 {
    width: 100%;
    position: absolute;
    top: 107px;
    right: -25%;
    z-index: 1;

    @media (max-width: ${breakpoints.mobile}) {
      width: 775px;
      top: 75px;
      right: -400px;
    }
  }

  #bg-light {
    position: absolute;
    left: -10%;
    top: -550px;
    z-index: 1;

    @media (max-width: ${breakpoints.mobile}) {
      width: 450px;
      left: -100px;
      top: -120px;
      filter: blur(30px);
    }
  }

  #bg-light-2,
  #bg-light-2-filter {
    position: absolute;
    left: -25%;
    top: -620px;
    z-index: 1;

    @media (max-width: ${breakpoints.mobile}) {
      width: 500px;
      left: -140px;
      top: -150px;
    }
  }

  #bg-light-2-filter {
    filter: brightness(70%);

    @media (max-width: ${breakpoints.mobile}) {
      filter: brightness(100%);
      filter: blur(30px);
    }
  }

  #bg-light-header {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100vw;
      top: 75px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 0px;
    padding: 0px;
  }
`;

export const PageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ page }) =>
    page === "documentation" ? "60px 54px" : "145px 145px"};
  gap: ${({ page }) => (page === "documentation" ? "60px" : "145px")};
  z-index: 2;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px;
    gap: 48px;
  }
`;
