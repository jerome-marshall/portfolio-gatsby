import styled from "styled-components";
import { landScapeMediaQueries } from "../../GlobalStyles";

export const StyledWorkSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  /* height: 100vh; */
  padding-top: 70px;
  background: var(--background-dark);
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: var(--white);

  @media (max-width: 768px) {
    display: block;
  }
  /* ${landScapeMediaQueries} */
`;

export const WorkContent = styled.div`
  z-index: 3;
  max-width: var(--max-width);
  position: relative;
  display: flex;
  flex-direction: column;
  /* border: 3px solid white; */
  justify-content: center;
  align-items: center;
  margin: 0 24px;
  /* overflow: hidden; */

  & > h2 {
    color: var(--white);
    margin: var(--margin-md) 0;
    font-size: var(--fz-heading-md);
  }

  & ul.project-grid {
    width: 100%;
    display: grid;
    grid-gap: 15px;
    padding-top: 30px;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(300px, auto);

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      /* grid-auto-rows: minmax(300px, auto); */
    }

    @media (max-width: 510px) {
      grid-template-columns: repeat(1, 1fr);
      /* grid-auto-rows: minmax(300px, auto); */
    }
  }
`;

export const ProjectLI = styled.li`
  /* border: 3px solid white; */
  background-color: var(--background-dark-highlight);
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: 2fr 8fr;
  width: 100%;
  padding: 30px 20px;
  transition: var(--transition);

  & .leftIcon {
    /* grid-area: "leftIcon"; */
    /* background-color: chocolate; */
    background-color: var(--background-dark-highlight);
    justify-self: start;
    align-self: center;
    /* padding: 10px; */

    & svg {
      background-color: var(--background-dark-highlight);
      width: 40px;
      height: 40px;
    }
  }

  & .rightIcons {
    background-color: var(--background-dark-highlight);
    justify-self: end;
    align-self: center;
    /* padding-left: 10px; */

    & a {
      background-color: var(--background-dark-highlight);
      color: var(--white);
    }

    & svg {
      background-color: var(--background-dark-highlight);
      margin-right: 10px;
      width: 22px;
      height: 22px;
      transition: var(--transition);

      :hover {
        color: #0088ff;
      }
    }
  }

  & .content {
    background-color: var(--background-dark-highlight);
    grid-column: 1/3;

    & h3.title {
      background-color: var(--background-dark-highlight);
      margin: 20px 0 10px 0;
      font-size: var(--fz-xl);
      transition: var(--transition);
    }

    & p.description {
      background-color: var(--background-dark-highlight);
      color: var(--grey-300);
      margin-bottom: 30px;
    }
  }

  & ul {
    /* background-color: cadetblue; */
    background-color: var(--background-dark-highlight);
    grid-column: 1/3;
    justify-self: end;
    align-self: end;
    list-style: none;
  }

  & li {
    background-color: var(--background-dark-highlight);
    /* width: 25%;
    float: right; */

    color: var(--grey-500);
    font-size: var(--fz-xs);
    padding: 10px;
    transition: var(--transition);

    display: inline;
    justify-self: end;
    align-self: end;

    @media (max-width: 1000px) {
      float: right;
      :nth-child(3n + 4) {
        clear: left;
      }
    }

    @media (max-width: 510px) {
      float: none;
      :nth-child(3n + 4) {
        clear: none;
      }
    }

    @media (max-width: 360px) {
      float: right;
      :nth-child(3n + 4) {
        clear: left;
      }
    }
  }

  :hover {
    transform: translateY(-7px);
    & h3.title,
    li {
      color: #0088ff;
    }
  }
`;
