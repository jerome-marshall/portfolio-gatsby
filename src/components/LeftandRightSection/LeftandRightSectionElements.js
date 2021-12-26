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

    & div.iconCard {
      display: flex;
      gap: 10px;
      padding: 12px;
      margin-bottom: 20px;
      background-color: var(--background-dark-highlight);
      justify-content: ${props => props.right && "flex-end"};
      align-items: center;
      border-radius: 50px;

      transition: width 1s ease-in-out;
      overflow: hidden;

      :hover {
        /* padding: 12px 20px; */
      }

      :hover span {
        display: inline;
      }

      :hover svg {
        color: blue;
      }

      & span {
        color: white;
        display: none;
        font-size: 14px;
      }

      & svg {
        width: 20px;
        height: 20px;
        color: var(--grey-500);
      }
    }
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
`
