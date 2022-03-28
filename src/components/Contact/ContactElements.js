import styled from "styled-components"
import { landScapeMediaQueries } from "../../GlobalStyles"

export const ContactContainer = styled.div`
  /* background: ${({ theme }) => theme.colors.background_1}; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  ${landScapeMediaQueries}
`

export const ContactContent = styled.div`
  z-index: 3;
  max-width: 600px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p.sub-title {
    margin-top: var(--margin-md);
    color: ${({ theme }) => theme.colors.text_300};
    font-size: var(--fz-md);
    text-align: center;
    width: 100%;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.text_900};
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
    color: ${({ theme }) => theme.colors.text_500};
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
`

export const StyledA = styled.a`
  margin: 0 auto;
  position: relative;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.text_900};
  background: transparent;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  border-radius: var(--border-radius);
  border: solid ${({ theme }) => theme.colors.text_900};
  padding: 1rem 1.75rem;
  transition: var(--transition);
  transition-property: background color;

  &:hover {
    background: ${({ theme }) => theme.colors.background_hover};
    color: ${({ theme }) => theme.colors.text_hover};
  }

  &:visited {
    text-decoration: none;
  }
`
