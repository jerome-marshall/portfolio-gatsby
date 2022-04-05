import styled from "styled-components"

export const SectionWrapper = styled.div``

export const SectionContainer = styled.div`
  /* background-color: red; */
  position: fixed;
  bottom: 0;
  left: ${props => props.left && props.theme.adjustment + "px"};
  right: ${props => props.right && props.theme.adjustment + "px"};
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.right && "flex-end") || "flex-start"};
  background: transparent;
  z-index: 12;
  overflow: visible;

  & div.cards {
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.right && "flex-end") || "flex-start"};
    background: transparent;
  }

  & div.bar {
    /* background-color: brown; */
    display: flex;
    width: 44px;
    justify-content: center;
    background: transparent;

    & p {
      height: 150px;
      border-left: 2px solid ${props => props.theme.colors.accent_border};
    }
  }

  @media (max-width: 1300px) {
    display: none;
  }
`

export const IconCard = styled.a`
  display: flex;
  flex-direction: ${props => (props.right && "row-reverse") || "row"};
  flex-wrap: row wrap;
  gap: 12px;
  padding: 12px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.background_1};
  border: 2px solid ${props => props.theme.colors.accent_border};
  /* justify-content: ${props => props.right && "flex-end"}; */
  align-items: center;
  border-radius: 50px;
  width: 48px;
  transition: var(--transition-card);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  z-index: 100;

  :hover {
    /* padding: 12px 20px; */
    width: ${props => props.width + "px"};
    border: 2px solid ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.background_2};

  }

  :visited, :link {
    color: ${props => props.theme.colors.text_900};
  }

  :hover span {
    display: inline;
    /* transition: all 1s linear; */
  }

  :hover svg {
    /* color: ${props => props.theme.colors.primary}; */
    /* min-width: 22px;
    min-height: 22px; */
  }

  & span {
    display: none;
    background: transparent;
    color: ${props => props.theme.colors.text_900};

    /* display: none; */
    font-size: 14px;
    z-index: 99;
    transition: var(--transition-card);
  }

  & svg {
    background: transparent;
    min-width: 20px;
    min-height: 20px;
    color: ${props => props.theme.colors.text_700};
    transition: var(--transition-card);
  }
`

export const CreditSectionWrapper = styled.div`
  display: none;
  position: relative;
  background: transparent;
  /* color: white; */
  margin-top: -89px;
  z-index: 1000;

  @media screen and (max-width: 1300px) {
    display: block;
  }
`

export const CreditSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  /* color: white; */
  align-items: center;
  /* padding: 10px; */

  .credit {
    & p {
      font-size: var(--fz-xs);
      color: ${props => props.theme.colors.text_500};
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    gap: 15px;
    margin-bottom: 15px;

    ${IconCard} {
      margin-bottom: 0px;
    }

    :hover span {
      display: none;
      /* transition: all 1s linear; */
    }

    a:hover svg {
      color: ${props => props.theme.colors.primary};
    }

    & span {
      display: none;
      /* display: none; */
    }

    & svg {
      background: transparent;
      min-width: 20px;
      min-height: 20px;
      color: ${props => props.theme.colors.text_700};
      z-index: 100;
      transition: ${({ theme }) => theme.transitions.easeInOut.normal};

      /* :hover {
        color: ${props => props.theme.colors.primary};
      } */
    }
  }
`
