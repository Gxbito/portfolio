import { PageWrapperStyled, PageContent } from "./PageWrapper.styles";
import BackgroundVerticalLight from "@/assets/vectors/background-vertical-light.svg";
import BackgroundHeaderLight from "@/assets/vectors/header-light.svg";
import BackgroundHomePattern from "@/assets/vectors/home-background-pattern.svg";
import BackgroundPattern from "@/assets/vectors/background-pattern.svg";
import Footer from "@/components/Footer/Footer";

const backgroundImageProps = {
  "aria-hidden": "true",
  decoding: "async",
  draggable: "false",
  alt: "",
};

function PageWrapper({ children, page }) {
  return (
    <PageWrapperStyled page={page}>
      <div>
        <div>
          {page === "documentation" ? (
            <>
              <img
                {...backgroundImageProps}
                src={BackgroundHeaderLight}
                id="bg-light-header"
                width="1561"
                height="371"
                loading="eager"
              />
              <img
                {...backgroundImageProps}
                src={BackgroundPattern}
                id="bg-pattern-2"
                width="1620"
                height="554"
                loading="lazy"
              />
            </>
          ) : page === "about" ? (
            <>
              <img
                {...backgroundImageProps}
                src={BackgroundVerticalLight}
                id="bg-light-2"
                width="1857"
                height="1465"
                loading="lazy"
              />
              <img
                {...backgroundImageProps}
                src={BackgroundPattern}
                id="bg-pattern"
                width="1620"
                height="554"
                loading="lazy"
              />
            </>
          ) : page === "home" ? (
            <>
              <img
                {...backgroundImageProps}
                src={BackgroundVerticalLight}
                id="bg-light"
                width="1857"
                height="1465"
                loading="eager"
              />
              <img
                {...backgroundImageProps}
                src={BackgroundHomePattern}
                id="bg-home"
                width="1560"
                height="977"
                loading="eager"
                fetchPriority="high"
              />
            </>
          ) : (
            <>
              <img
                {...backgroundImageProps}
                src={BackgroundVerticalLight}
                id="bg-light-2-filter"
                width="1857"
                height="1465"
                loading="lazy"
              />
              <img
                {...backgroundImageProps}
                src={BackgroundPattern}
                id="bg-pattern"
                width="1620"
                height="554"
                loading="lazy"
              />
            </>
          )}
        </div>
      </div>

      <PageContent page={page}>
        <div>
          {children}
        </div>
      </PageContent>
      <Footer />
    </PageWrapperStyled>
  );
}

export default PageWrapper;
