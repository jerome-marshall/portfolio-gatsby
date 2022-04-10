import { createGlobalStyle, css } from "styled-components"

const transitions = {
  linear: {
    fast: "all 0.2s linear",
    normal: "all 0.3s linear",
    slow: "all 0.6s linear",
    theme: "all 1s linear",
  },
  easeInOut: {
    fast: "all 0.2s ease-in-out",
    normal: "all 0.3s ease-in-out",
    slow: "all 0.6s ease-in-out",
    theme: "all 1s ease-in-out",
  },
}

export const darkTheme = {
  id: "dark",
  colors: {
    accent_border: "#102e66",
    secondary: "#7eabff",
    primary: "#2873ff",
    accent_hover: "#528fff",
    background_1: "#040b19",
    background_2: "#061229",
    background_3: "#0e1d50",
    background_hover: "#eeeeee",
    text_900: "#eff1ff",
    text_700: "#9aadd1",
    text_500: "#6078a3",
    text_300: "#888888",
    text_100: "#666666",
    text_hover: "#111111",
    text_accent: "#2873ff",
    shadow: "#eeeeee",
  },
  transitions,
  header_width: "1500",
  content_width: "1300",
}

export const lightTheme = {
  id: "light",
  colors: {
    accent_border: "#efd199",
    secondary: "#815400",
    primary: "#d78c00",
    accent_hover: "#ad7000",
    background_1: "#fbf4e6",
    background_2: "#f9edd6",
    background_3: "#f1e2af",
    background_hover: "#111111",
    text_900: "#100e00",
    text_700: "#65522e",
    text_500: "#9f875c",
    text_300: "#777777",
    text_100: "#999999",
    text_hover: "#eeeeee",
    text_accent: "#d78c00",
    shadow: "#111111",
  },
  transitions,
  header_width: "1500",
  content_width: "1300",
}

const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.colors.background_1};
  transition: background 1s ease-in-out;
  max-width: ${({ theme }) => theme.content_width + "px"};
  position: relative;
  margin: 0 auto;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Noto Sans JP", sans-serif;
  -webkit-tap-highlight-color: transparent;
  /* transition: all 1s ease-in-out ; */
  /* background: var(--background-dark); */
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: var(--background-dark);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--grey-500);
  border-radius: 100px;
  /* border: 3px solid orange; */
}

  html {
    --background-dark: #0c0c0c;
    --background-dark-highlight: #1f1f1f;
    --colors-accent: #3a32ff;
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
    --transition-card: all 0.5s ease-in-out;
    --transition-theme: all 1s ease-in-out;
    --transition-theme-property: background color background-color;
    --nav-height: 80px
  }
`
export default GlobalStyles

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
`
