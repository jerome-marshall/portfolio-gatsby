import styled, { css } from "styled-components"
import { Link } from "react-scroll"

export const Nav = styled.nav`
  position: fixed;
  /* background: red; */
  background: ${props => props.theme.colors.background_1};
  height: var(--nav-height);
  right: 0;
  left: 0;
  z-index: 10;
  transition: ${({ theme }) => theme.transitions.easeInOut.theme} !important;
  /* transition-property: background; */

  @media screen and (max-width: 960px) {
    /* transition: 0.8s all ease; */
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  /* margin-top: 20px; */
  padding: 0px 20px;
  max-width: 100%;
  transition: ${({ theme }) => theme.transitions.easeInOut.normal};

`

export const NavLogo = styled(Link)`
  color: ${props => props.theme.colors.primary};
  justify-self: flex-start;
  cursor: pointer;
  font-size: var(--fz-xxl);
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin: 0 auto; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileIcon = styled.div`
  display: none;
  /* margin-left: auto; */

  @media screen and (max-width: 768px) {
    display: flex;
    align-self: center;
    font-size: calc(var(--fz-xxl) + 3px);
    cursor: pointer;
    color: ${props => props.theme.colors.text_900};
  }
`

export const NavItem = styled.li`
  height: var(--nav-height);
`
const navItems = css`
  color: ${props => props.theme.colors.text_900};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: var(--fz-sm);
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  /* border-bottom: 0px solid ${props => props.theme.colors.primary}; */
  transition: all 0.3s ease-out;

  &:hover {
    /* background: ${props => props.theme.colors.background_2};
    border-bottom: 3px solid ${props => props.theme.colors.primary}; */
    color: ${props => props.theme.colors.primary};

  }
`
export const NavLinks = styled(Link)`
  ${navItems}
`
export const NavBtnLink = styled.a`
  ${navItems}
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavToggle = styled.nav`
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: 1.5rem;
  }
`


