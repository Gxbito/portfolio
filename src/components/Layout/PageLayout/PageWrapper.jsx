import {
  PageWrapperStyled,
  PageContent,
  BackgroundLightContainer,
  BackgroundHomeContainer
} from "./PageWrapper.styles";
import BackgroundLight from "../../../assets/backgrounds/background-light.svg";
import BackgroundHome from "../../../assets/backgrounds/home-background-pattern.svg";

function PageWrapper({ children }) {
  return (
    <PageWrapperStyled>
      <BackgroundLightContainer>
        <img src={BackgroundLight} alt="bg-light" />
      </BackgroundLightContainer>

      <BackgroundHomeContainer>
        <img src={BackgroundHome} alt="bg-home" />
      </BackgroundHomeContainer>

      <PageContent>{children}</PageContent>
    </PageWrapperStyled>
  );
}

export default PageWrapper;
