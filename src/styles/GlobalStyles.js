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
    --color-text-main-title: linear-gradient(162deg, #F0F0F0 30%, #8F9BA8 100%);
    --color-text-title: #F0F0F0;
    --color-text-paragraph: #ccd0d4;
    --color-placeholder: #6E7681;  

    /* Interactive */
    --color-primary: #3A8DFF;
    --color-primary-button-gradient: linear-gradient(18deg, #0D6EFD 0%, #1E88E5 100%);
    --color-primary-button-gradient-hover: linear-gradient(18deg, #0B5CC7 0%, #1A7BCF 100%);
    --color-primary-button-gradient-active: linear-gradient(18deg, #0950A4 0%, #1669A5 100%);

    --color-secondary-button-gradient: linear-gradient(18deg, #272B2D 0%, #1E1E1E 100%);
    --color-secondary-button-gradient-hover: linear-gradient(18deg, #2A3032 0%, #252525 100%);
    --color-secondary-button-gradient-active: linear-gradient(18deg, #212627 0%, #1F1F1F 100%);

    --color-card-button: #23262A;
    --color-card-button-hover: #2A2D32;
    --color-card-button-active: #1F2225;

    --color-border: #3A3A3A;
    --color-border-hover: #4A4D4F;
    --color-border-active: #2F3234;

    /* Inputs */
    --color-input-bg: #0E0F11;
    --color-input-text: #FFFFFF;

    /* Shadows */
    --shadow-page: 0 0 90px 0 rgba(0, 0, 0, 0.1), 0 0 50px 0 rgba(0, 0, 0, 0.28);
    
    --shadow-button: 0 6px 13px 0 rgba(10, 10, 10, 0.15), 0 24px 24px 0 rgba(10, 10, 10, 0.13), 0 53px 32px 0 rgba(10, 10, 10, 0.08), 0 94px 38px 0 rgba(10, 10, 10, 0.02), 0 147px 41px 0 rgba(10, 10, 10, 0);
    --shadow-button-hover: 0 6px 15px 0 rgba(10, 10, 10, 0.18), 0 28px 28px 0 rgba(10, 10, 10, 0.15), 0 60px 35px 0 rgba(10, 10, 10, 0.10);
    --shadow-button-active: 0 6px 10px 0 rgba(10, 10, 10, 0.20), 0 22px 22px 0 rgba(10, 10, 10, 0.18), 0 50px 28px 0 rgba(10, 10, 10, 0.12);

    --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.2);
    --shadow-card-hover: 0 4px 16px rgba(255, 255, 255, 0.06);
    --shadow-card-active: 0 0 0 2px rgba(255, 255, 255, 0.08);

    /* Fonts */
    --font-primary: "Albert Sans", sans-serif;
    --font-secondary: "Barlow", sans-serif;
    --font-bg-card: "Anton", sans-serif;

    --font-size-header-1: 2.75rem;    /* 44px */
    --font-size-header-2: 2.25rem;    /* 36px */
    --font-size-header-3: 1.75rem;    /* 28px */
    --font-size-header-4: 1.375rem;   /* 22px */
    --font-size-header-5: 1.125rem;   /* 18px */
    --font-size-header-6: 1rem;       /* 16px */

    --font-size-button: 0.9375rem;    /* 15px */
    --font-size-auxiliar: 0.8125rem;  /* 13px */
    --font-size-tags: 0.75rem;        /* 12px */

    --font-size-large-paragraph: 1rem;          /* 16px */
    --font-size-medium-paragraph: 0.9375rem;    /* 15px */
    --font-size-small-paragraph: 0.8125rem;     /* 13px */
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
