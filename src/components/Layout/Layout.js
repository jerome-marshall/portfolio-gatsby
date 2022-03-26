import React from "react"
import SideBar from "../Sidebar/SideBar"
import NavBar from "../Navbar/NavBar"
import { useState } from "react"
import "./layout.css"
import GlobalStyles, { darkTheme } from "../../GlobalStyles"
import SocialsSection from "../SocialsSection/SocialsSection"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../../GlobalStyles"

const Layout = props => {
  const [SideBarIsOpen, setSideBarIsOpen] = useState(false)

  const toggle = () => {
    setSideBarIsOpen(!SideBarIsOpen)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="wrapper">
        <GlobalStyles />
        <SideBar isOpen={SideBarIsOpen} toggle={toggle}></SideBar>
        <NavBar toggle={toggle}></NavBar>

        {props.children}
        <SocialsSection></SocialsSection>
      </div>
    </ThemeProvider>
  )
}

export default Layout
