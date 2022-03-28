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
    accent_100: "#150d6d",
    accent_300: "#160c85",
    accent_500: "#1A0E93",
    accent_700: "#2b2ebb",
    accent_900: "#484bfd",
    accent_hover: "#6b6dff",
    background_1: "#06041D",
    background_2: "#0A072D",
    background_3: "#0A0537",
    background_hover: "#eeeeee",
    text_900: "#eeeeee",
    text_700: "#cccccc",
    text_500: "#999999",
    text_300: "#777777",
    text_100: "#333333",
    text_hover: "#111111",
    shadow: "#eeeeee",
  },
  transitions,
}

export const lightTheme = {
  id: "light",
  colors: {
    primary: "#d89742",
    secondary: "#dd8109",
    background_1: "#ebebeb",
    background_2: "#d6d6d6",
    background_3: "#b4b4b4",
  },
  transitions,
}

const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.colors.background_1};
  transition: background 1s ease-in-out;
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
