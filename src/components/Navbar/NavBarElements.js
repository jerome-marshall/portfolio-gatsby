import styled from "styled-components"
import { Link } from "react-scroll"

export const Nav = styled.nav`
position: fixed;
  /* background: red; */
  background: ${props => props.theme.colors.background_1};
  height: var(--nav-height);
  right: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0ms.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  height: 100%;
  z-index: 1;
  width: 100%;
  /* margin-top: 20px; */
  padding: 0px 20px;
  max-width: 100%;
`

export const NavLogo = styled(Link)`
  color: ${props => props.theme.colors.text_900};
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
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileIcon = styled.div`
  display: none;
  margin-left: auto;

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

export const NavLinks = styled(Link)`
  color: ${props => props.theme.colors.text_900};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: var(--fz-sm);
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.background_3};
    border-bottom: 3px solid ${props => props.theme.colors.text_900};
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled.a`
  border-radius: var(--border-radius);
  background: transparent;
  white-space: nowrap;
  padding: 0.4rem 1.12rem;
  color: ${props => props.theme.colors.text_900};
  font-size: var(--fz-sm);
  outline: none;
  border: solid ${props => props.theme.colors.text_900};
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.colors.background_hover};
    color: ${props => props.theme.colors.text_hover};
  }
`
