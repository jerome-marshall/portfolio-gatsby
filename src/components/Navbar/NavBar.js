import React from "react";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
            JM
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={1000}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience" smooth={true} duration={1000}>
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work" smooth={true} duration={1000}>
                Work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={1000}>
                Contract
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink
                href="https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view?usp=sharing"
                target="_blank"
              >
                Reusme
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
