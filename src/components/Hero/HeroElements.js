import { Link } from "react-scroll"
import styled from "styled-components"
import { landScapeMediaQueries } from "../../GlobalStyles"

export const HeroContainer = styled.div`
  /* background: ${props => props.theme.colors.background_1}; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 30px; */
  height: 100vh;
  position: relative;
  z-index: 1;

  ${landScapeMediaQueries}
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: var(--max-width);
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & p.myNameIs {
    margin-top: var(--margin-md);
    color: ${props => props.theme.colors.secondary};
    font-size: var(--fz-md);
    text-align: center;
    max-width: 600px;
  }

  & h1.name {
    color: ${props => props.theme.colors.text_900};
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
    color: ${props => props.theme.colors.text_500};
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
    color: ${props => props.theme.colors.text_300};
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
`

export const Button = styled(Link)`
  margin-top: 3rem;
  color: ${props => props.theme.colors.primary};
  background: transparent;
  font-size: 18px;
  text-align: left;
  border-radius: var(--border-radius);
  border: solid ${props => props.theme.colors.primary};
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text_hover};
    border: solid ${props => props.theme.colors.secondary};
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 1.5rem;
  }
`
