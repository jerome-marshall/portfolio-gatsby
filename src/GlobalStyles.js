import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --background-dark: #0c0c0c;
    --background-dark-highlight: #1f1f1f;
    --white: #eee;
    --grey-100: #ddd;
    --grey-300: #bbb;
    --grey-500: #999;
    --grey-700: #888;
    --grey-900: #777;
    --max-width: 1000px;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading-sm: 28px;
    --fz-heading-md: 32px;
    --fz-heading-lg: 36px;
    --border-radius: 30px;
    --margin-md: 24px;
    --margin-lg: 32px;
    --padding-xs: 14px;
    --padding-sm: 18px;
    --padding-md: 24px;
    --padding-lg: 32px;
    --line-height-sm: 1.6;
    --transition: all 0.3s ease-in-out;
    --nav-height: 60px
  }

  /* html {
    --background-dark: #0c0c0c;
    --background-dark-highlight: #1f1f1f;
    --white: #eee;
    --grey-100: #ddd;
    --grey-300: #bbb;
    --grey-500: #999;
    --grey-700: #888;
    --grey-900: #777;
    --max-width: 1000px;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading-sm: 28px;
    --fz-heading-md: 32px;
    --fz-heading-lg: 36px;
    --border-radius: 30px;
    --margin-md: 24px;
    --margin-lg: 32px;
    --padding-xs: 14px;
    --padding-sm: 18px;
    --padding-md: 24px;
    --padding-lg: 32px;
    --line-height-sm: 1.6;
    --transition: all 0.3s ease-in-out;
    --nav-height: 60px
  } */
`;
export default GlobalStyles;

export const landScapeMediaQueries = css`
  @media screen and (max-height: 600px) {
    height: 120vh;
  }

  @media screen and (max-height: 500px) {
    height: 150vh;
  }
  @media screen and (max-height: 360px) {
    height: 180vh;
  }
`;
