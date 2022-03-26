import { createGlobalStyle, css } from "styled-components"

// const padding = {
//   sm: "1rem",
//   md: "2rem",
//   lg: "3rem",
//   xl: "4rem",
// }

// const fz = {
//   xs: "1rem",
//   sm: "1.2rem",
//   md: "1.5rem",
//   lg: "2rem",
//   xl: "2.5rem",
// }

// const styles = {
//   fontSize: fz,
//   ...padding,
// }

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
}

export const lightTheme = {
  id: "light",
  colors: {
    primary: "#d89742",
    secondary: "#dd8109",
    background_1: "#ebebeb",
    background_2: "#d6d6d6",
    background_3: "#b4b4b4",
    // ...colorss
  },
}

const GlobalStyles = createGlobalStyle`
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
