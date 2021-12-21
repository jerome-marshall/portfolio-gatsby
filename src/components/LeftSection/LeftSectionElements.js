import styled from "styled-components"

export const LeftSectionContainer = styled.div`
  /* background-color: red; */
  position: fixed;
  bottom: 0;
  z-index: 12;
  width: 100px;

  & div.icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 24px;

    & svg {
      width: 20px;
      height: 20px;
      color: var(--grey-500);
    }

    & p {
      height: 150px;
      border-left: 2px solid var(--grey-500);
    }
  }
`

export const RightSectionContainer = styled.div`
  /* background-color: red; */
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 12;
  width: 100px;

  & div.icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 24px;

    & svg {
      width: 20px;
      height: 20px;
      color: var(--grey-500);
    }

    & p {
      height: 150px;
      border-left: 2px solid var(--grey-500);
    }
  }
`
