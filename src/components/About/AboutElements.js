import styled from "styled-components"
import { landScapeMediaQueries } from "../../GlobalStyles"

export const StyledAboutSection = styled.section`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    height: auto;
  }

  ${landScapeMediaQueries}
`

export const AboutContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: var(--margin-md);
  max-width: calc(var(--max-width) - 50px);

  & > h2 {
    color: ${({ theme }) => theme.colors.text_900};
    padding: var(--margin-md) 0;
    font-size: var(--fz-heading-sm);
  }

  @media (max-width: 480px) {
    display: block;
  }
  @media (max-width: 1000px) {
    display: block;
  }
`

export const Container = styled.div`
  /* padding-top: var(--nav-height); */
  z-index: 3;
  max-width: calc(var(--max-width) - 50px);
  position: relative;
  display: grid;

  /* border: 3px solid white; */
  grid-template-columns: 3fr 2fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const AboutSummary = styled.div`
  /* background-color: coral; */
  display: flex;
  flex-direction: column;
  flex: auto;

  & div.summary {
    padding: 12px 0;
    /* margin: 0 var(--margin-md); */
  }

  & p {
    color: ${({ theme }) => theme.colors.text_500};
    font-size: var(--fz-md);
    line-height: var(--line-height-sm);
  }

  & ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin-top: 20px;
    /* list-style-position: inside; */
    overflow: hidden;
    list-style: none;

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }

    li {
      color: ${({ theme }) => theme.colors.text_900};
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      text-indent: 0px;
      /* transition to cancel */
      transition: all 0.1s ease-in-out;

      /* font-family: var(--font-mono); */
      font-size: var(--fz-sm);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        /* top: 1px; */
        color: ${({ theme }) => theme.colors.accent_900};
        font-size: var(--fz-sm);
        /* line-height: 15px; */
      }

      /* span {
        position: relative;
        left: 5px;
      } */
    }
  }
`

export const StyledPic = styled.div`
  /* background-color: aquamarine; */
  max-height: 100%;
  max-width: 310px;
  position: relative;
  align-self: flex-start;
  padding: 12px 0;
  margin: 0 24px;
  justify-self: center;

  .wrapper {
    /* background-color: red;

    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    border: none;
    border-radius: var(--border-radius);
    box-shadow: 16px white; */

    .img {
      /* max-width: 300px; */
      /* filter: none; */
      /* mix-blend-mode: normal; */
      max-width: 280px;
      max-height: 100%;
      border-radius: var(--border-radius);
      opacity: 0.6;
      object-fit: contain;
      box-shadow: 0 10px 30px -15px ${({ theme }) => theme.colors.shadow};
      transition: all 300ms ease-in-out;
      transition-property: max-width opacity;

      :hover {
        max-width: 300px;
        opacity: 1;
      }

      @media (max-width: 768px) {
        max-width: 270px;
        margin: 12px;

        :hover {
          max-width: 280px;
        }
      }
      @media (max-width: 480px) {
        max-width: 240px;
        margin: 12px;

        :hover {
          max-width: 250px;
        }
      }
    }
  }

  /* :hover {
    bottom: 10px;
    right: 10px;
  } */
`
