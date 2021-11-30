import styled, { css } from "styled-components";
import { landScapeMediaQueries } from "../../GlobalStyles";

export const StyledExperienceSection = styled.section`
  max-width: 100%;
  height: 100vh;
  background: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    /* background-color: turquoise; */
    display: block;
  }

  ${landScapeMediaQueries}
`;

export const ExperienceContent = styled.div`
  z-index: 3;
  /* width: 700px; */
  max-height: 100%;
  /* margin: 100px var(--margin-md); */
  /* height: 700px; */
  position: relative;
  display: flex;
  flex-direction: column;
  /* border: 3px solid white; */
  /* justify-content: flex-start; */
  align-items: flex-start;
  color: var(--white);
  padding: var(--margin-md);

  & > h2 {
    color: var(--white);
    margin: var(--margin-md) 0;
    font-size: var(--fz-heading-sm);
  }

  @media (max-width: 480px) {
    display: block;
    top: 80px;
  }
`;

export const Container = styled.div`
  /* background-color: white; */
  display: flex;
  height: 250px;
  flex-direction: row;
  margin: 20px 0px;

  @media (max-width: 480px) {
    padding-top: 5px;
    display: block;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  /* padding: 2px; */
`;

export const TabPanelContainer = styled.div`
  margin-left: 30px;
  width: 600px;

  /* & p {
    margin-left: -20px;
  } */
  & h3 {
    color: skyblue;
    .title {
      color: var(--white);
      font-size: var(--fz-xl);
      margin-bottom: 8px;
    }

    a.url {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: skyblue;
      &:hover {
        cursor: pointer;
        color: #0088ff;
      }
    }
  }

  & p.expTime {
    margin-bottom: 25px;
    margin-top: 5px;
    font-size: var(--fz-sm);
    color: var(--grey-300);
  }

  & ul {
    list-style: none;
    list-style-position: inside;
  }

  & li {
    color: var(--grey-300);
    font-size: var(--fz-md);
    margin-bottom: 8px;
    position: relative;
    line-height: 25px;
    /* text-indent: -20px; */
    padding-left: 20px;

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      /* top: 5px; */
      color: var(--white);
      font-size: var(--fz-sm);
      /* line-height: 15px; */
    }
  }

  @media (max-width: 480px) {
    margin: 30px 0;
  }

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const TabHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  width: 100%;
`;

export const StylizedTab = styled.button`
  color: var(--grey-700);
  /* width: 8.5rem; */
  white-space: nowrap;
  padding: 12px 15px;
  font-size: var(--fz-sm);
  text-align: start;
  background-color: transparent;
  border: none;
  border-left: 3px solid var(--grey-900);
  /* border-radius: var(--border-radius); */
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  transition: all 0.3s ease-in-out;

  /* ${(p) =>
    p.active
      ? css`
          color: var(--white);
          border-left: 3px solid white;
        `
      : css`
          color: var(--grey-900);
        `} */

  //color
  ${(p) =>
    p.active &&
    css`
      color: var(--white);
      border-left: 3px solid white;
    `}

  :hover {
    background-color: #333;
    color: var(--white);
  }

  @media (max-width: 480px) {
    border: none;
    border-bottom: 3px solid var(--grey-900);

    ${(p) =>
      p.active &&
      css`
        border-bottom: 3px solid white;
      `}

    :hover {
      background-color: transparent;
    }
  }
`;

export const StyledTabPanel = styled.div`
  background-color: tomato;
  position: relative;
  display: ${(p) => (p.active ? "flex" : "none")};
  background: var(--background-dark);
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 480px) {
    /* width: 350px; */
  }
`;

export const TabPanelContent = styled.div``;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: row;
  }
`;
