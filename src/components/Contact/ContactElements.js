import styled from "styled-components";
import { landScapeMediaQueries } from "../../GlobalStyles";

export const ContactContainer = styled.div`
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

export const ContactContent = styled.div`
  z-index: 3;
  max-width: 600px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p.sub-title {
    margin-top: var(--margin-md);
    color: var(--grey-300);
    font-size: var(--fz-md);
    text-align: center;
    width: 100%;
  }

  & h2 {
    color: var(--white);
    font-size: 50px;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 44px;
    }
    @media screen and (max-width: 480px) {
      font-size: 28px;
    }
  }

  & p.description {
    margin-top: var(--margin-md);
    color: var(--grey-700);
    font-size: var(--fz-lg);
    text-align: center;
    line-height: var(--line-height-sm);

    @media screen and (max-width: 768px) {
      font-size: var(--fz-lg);
    }
    @media screen and (max-width: 480px) {
      font-size: var(--fz-md);
    }
  }
`;

export const StyledA = styled.a`
  margin: 0 auto;
  position: relative;
  margin-top: 3rem;
  color: var(--white);
  background: transparent;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  border-radius: var(--border-radius);
  border: solid white;
  padding: 1rem 1.75rem;
  transition: var(--transition);

  &:hover {
    background: var(--white);
    color: #010606;
  }

  &:visited {
    text-decoration: none;
  }
`;
