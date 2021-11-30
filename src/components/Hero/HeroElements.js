import { Link } from "react-scroll";
import styled from "styled-components";
import { landScapeMediaQueries } from "../../GlobalStyles";

export const HeroContainer = styled.div`
  background: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  ${landScapeMediaQueries}
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: var(--max-width);
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p.myNameIs {
    margin-top: var(--margin-md);
    color: #fff;
    font-size: var(--fz-md);
    text-align: center;
    max-width: 600px;
  }

  & h1.name {
    color: var(--white);
    font-size: 70px;
    text-align: start;

    @media screen and (max-width: 768px) {
      font-size: 50px;
    }
    @media screen and (max-width: 480px) {
      font-size: 38px;
    }
  }

  & h2 {
    color: #aaa;
    font-size: 50px;
    text-align: start;

    @media screen and (max-width: 768px) {
      font-size: 44px;
    }
    @media screen and (max-width: 480px) {
      font-size: 28px;
    }
  }

  & p.summary {
    margin-top: var(--margin-md);
    color: #999;
    font-size: var(--fz-lg);
    text-align: left;
    max-width: 600px;
    line-height: var(--line-height-sm);

    @media screen and (max-width: 768px) {
      font-size: var(--fz-lg);
    }
    @media screen and (max-width: 480px) {
      font-size: var(--fz-md);
    }
  }
`;

export const Button = styled(Link)`
  margin-top: 3rem;
  color: #fff;
  background: transparent;
  font-size: 18px;
  text-align: left;
  border-radius: var(--border-radius);
  border: solid white;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover {
    background: var(--white);
    color: #010606;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 1.5rem;
  }
`;
