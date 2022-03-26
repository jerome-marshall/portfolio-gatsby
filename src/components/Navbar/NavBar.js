import React, { useState } from "react"
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
  NavToggle,
} from "./NavBarElements"
import { FaBars } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import DayNightToggle from "react-day-and-night-toggle"

const NavBar = ({ toggle, themeToggle, isDark }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
            JM
          </NavLogo>

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
              <NavLinks to="projects" smooth={true} duration={1000}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={1000}
                // offset={1000}
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavBtnLink
                href="https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view?usp=sharing"
                target="_blank"
              >
                Resume
              </NavBtnLink>
            </NavItem>
          </NavMenu>
          <NavToggle>
            <DayNightToggle
              onChange={themeToggle}
              checked={isDark}
              size={30}
              // shadows={false}
            />
          </NavToggle>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar
