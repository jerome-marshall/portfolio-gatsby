import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background: var(--background-dark);
  height: var(--nav-height);
  margin-top: calc(0px - var(--nav-height));
  display: flex;
  justify-content: stretch;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0ms.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: var(--nav-height);
  z-index: 1;
  width: 100%;
  padding: 24px 24px 0 24px;
  max-width: 100%;
`;

export const NavLogo = styled(Link)`
  color: var(--white);
  justify-self: flex-start;
  cursor: pointer;
  font-size: var(--fz-xxl);
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 20px;
    /* transform: translate(-100%, 60%); */
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--white);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: var(--nav-height);
`;

export const NavLinks = styled(Link)`
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: var(--fz-sm);
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    background: #111;
    border-bottom: 3px solid #eee;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: var(--border-radius);
  background: transparent;
  white-space: nowrap;
  padding: 0.4rem 1.12rem;
  color: #eee;
  font-size: var(--fz-sm);
  outline: none;
  border: solid white;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;

  &:hover {
    background: var(--white);
    color: #010606;
  }
`;
