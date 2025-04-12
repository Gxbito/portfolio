import { PageWrapperStyled, PageContent } from "./PageWrapper.styles";
import BackgroundVerticalLight from "@/assets/vectors/background-vertical-light.svg";
import BackgroundHeaderLight from "@/assets/vectors/header-light.svg";
import BackgroundHomePattern from "@/assets/vectors/home-background-pattern.svg";
import BackgroundPattern from "@/assets/vectors/background-pattern.svg";
import Header from "@/components/Header/Header";

function PageWrapper({ children, page }) {
  return (
    <PageWrapperStyled page={page}>
      {page === "documentation" ? (
        <>
          <img src={BackgroundHeaderLight} alt="bg-light" id="bg-light-header" />
          <img src={BackgroundPattern} alt="bg-pattern" id="bg-pattern-2" />
        </>
      ) : page === "about" ? (
        <>
          <img src={BackgroundVerticalLight} alt="bg-light" id="bg-light-2" />
          <img src={BackgroundPattern} alt="bg-pattern" id="bg-pattern" />
        </>
      ) : (
        <>
          <img src={BackgroundVerticalLight} alt="bg-light" id="bg-light" />
          <img src={BackgroundHomePattern} alt="bg-home" id="bg-home" />
        </>
      )}

      {page === "documentation" ? <Header /> : null}

      <PageContent page={page}>{children}</PageContent>
    </PageWrapperStyled>
  );
}

export default PageWrapper;
