import styled from "styled-components"

export const SectionContainer = styled.div`
  /* background-color: red; */
  position: fixed;
  bottom: 0;
  left: ${props => props.left && "40px"};
  right: ${props => props.right && "40px"};
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
      border-left: 2px solid var(--grey-500);
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
  background-color: var(--background-dark-highlight);
  /* justify-content: ${props => props.right && "flex-end"}; */
  align-items: center;
  border-radius: 50px;
  width: 44px;
  transition: var(--transition-card);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;

  :hover {
    /* padding: 12px 20px; */
    width: ${props => props.width + "px"};
  }

  :hover span {
    display: inline;
    /* transition: all 1s linear; */
  }

  :hover svg {
    color: var(--color-accent);
    min-width: 22px;
    min-height: 22px;
  }

  & span {
    background: transparent;
    color: white;
    /* display: none; */
    font-size: 14px;
    z-index: 99;
    transition: var(--transition-card);
  }

  & svg {
    background: transparent;
    min-width: 20px;
    min-height: 20px;
    color: var(--grey-500);
    z-index: 100;
    transition: var(--transition-card);
  }
`
