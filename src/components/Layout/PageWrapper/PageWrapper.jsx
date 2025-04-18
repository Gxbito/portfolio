import { PageWrapperStyled, PageContent } from "./PageWrapper.styles";
import BackgroundVerticalLight from "@/assets/vectors/background-vertical-light.svg";
import BackgroundHeaderLight from "@/assets/vectors/header-light.svg";
import BackgroundHomePattern from "@/assets/vectors/home-background-pattern.svg";
import BackgroundPattern from "@/assets/vectors/background-pattern.svg";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function PageWrapper({ children, page }) {
  return (
    <PageWrapperStyled page={page}>
      <div>
        <div>
          {page === "documentation" ? (
            <>
              <img
                src={BackgroundHeaderLight}
                alt="bg-light"
                id="bg-light-header"
              />
              <img src={BackgroundPattern} alt="bg-pattern" id="bg-pattern-2" />
            </>
          ) : page === "about" ? (
            <>
              <img
                src={BackgroundVerticalLight}
                alt="bg-light"
                id="bg-light-2"
              />
              <img src={BackgroundPattern} alt="bg-pattern" id="bg-pattern" />
            </>
          ) : page === "home" ? (
            <>
              <img src={BackgroundVerticalLight} alt="bg-light" id="bg-light" />
              <img src={BackgroundHomePattern} alt="bg-home" id="bg-home" />
            </>
          ) : (
            <>
              <img
                src={BackgroundVerticalLight}
                alt="bg-light-2"
                id="bg-light-2-filter"
              />
              <img src={BackgroundPattern} alt="bg-pattern" id="bg-pattern" />
            </>
          )}
        </div>
      </div>

      {page === "documentation" ? <Header /> : null}
      <PageContent page={page}>
        <div>{children}</div>
      </PageContent>
      <Footer />
    </PageWrapperStyled>
  );
}

export default PageWrapper;
