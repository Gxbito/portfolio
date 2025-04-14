import { createGlobalStyle } from "styled-components";
import "@fontsource/albert-sans";
import "@fontsource/barlow";
import "@fontsource/anton";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Backgrounds */
    --color-bg-main: #121212;
    --color-bg-page: #131516;
    --color-bg-card: #151719;

    /* Text */
    --color-text-main-title: linear-gradient(162deg, #EDEDED 33.05%, #8A8E93 100%);;
    --color-text-title: #EDEDED;
    --color-text-paragraph: #B3B3B3;
    --color-placeholder: #8A8E93;

    /* Interactive */
    --color-primary: #3A8DFF;
    --color-primary-button-gradient: linear-gradient(18deg, #0D6EFD 0%, #1E88E5 100%);
    --color-secondary-button-gradient: linear-gradient(18deg, #272B2D 0%, #1E1E1E 100%);
    --color-card-button: #23262A;
    --color-border: #3A3A3A;

    /* Inputs */
    --color-input-bg: #0E0F11;
    --color-input-text: #FFFFFF;

    /* Shadows */
    --shadow-button: 0 6px 13px 0 rgba(10, 10, 10, 0.15), 0 24px 24px 0 rgba(10, 10, 10, 0.13), 0 53px 32px 0 rgba(10, 10, 10, 0.08), 0 94px 38px 0 rgba(10, 10, 10, 0.02), 0 147px 41px 0 rgba(10, 10, 10, 0);
    --shadow-page: 0 0 90px 0 rgba(0, 0, 0, 0.1), 0 0 50px 0 rgba(0, 0, 0, 0.28);
    --shadow-card: 0 8px 17px 0 rgba(15, 15, 15, 0.15), 0 30px 30px 0 rgba(15, 15, 15, 0.13), 0 68px 41px 0 rgba(15, 15, 15, 0.08), 0 122px 49px 0 rgba(15, 15, 15, 0.02), 0 190px 53px 0 rgba(15, 15, 15, 0);

    /* Fonts */
    --font-primary: "Albert Sans", sans-serif;
    --font-secondary: "Barlow", sans-serif;
    --font-bg-card: "Anton", sans-serif;

    /* Font Sizes */
    --font-size-header-1: 3rem;           /* 48px */
    --font-size-header-2: 2.5rem;         /* 40px */
    --font-size-header-3: 2rem;           /* 32px */
    --font-size-header-4: 1.5rem;         /* 24px */
    --font-size-header-5: 1.25rem;        /* 20px */
    --font-size-header-6: 1rem;           /* 16px */

    --font-size-button: 1rem;             /* 16px */
    --font-size-auxiliar: 0.875rem;       /* 14px */
    --font-size-tags: 0.75rem;            /* 12px */

    --font-size-large-paragraph: 1.125rem;   /* 18px */
    --font-size-medium-paragraph: 1rem;      /* 16px */
    --font-size-small-paragraph: 0.875rem;   /* 14px */
  }

  @media (max-width: 1200px) {
    :root {
      /* Font Sizes - MOBILE */
      --font-size-header-1: 2rem;           /* 32px */
      --font-size-header-2: 1.75rem;        /* 28px */
      --font-size-header-3: 1.5rem;         /* 24px */
      --font-size-header-4: 1.25rem;        /* 20px */
      --font-size-header-5: 1.125rem;       /* 18px */
      --font-size-header-6: 1rem;           /* 16px */

      --font-size-button: 0.88rem;          /* 14px */
      --font-size-auxiliar: 0.8125rem;      /* 13px */
      --font-size-tags: 0.75rem;            /* 12px */

      --font-size-large-paragraph: 1rem;    /* 16px */
      --font-size-medium-paragraph: 0.9375rem; /* 15px */
      --font-size-small-paragraph: 0.8125rem;  /* 13px */
    }
}

`;

export default GlobalStyles;
