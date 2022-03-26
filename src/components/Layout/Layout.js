import React from "react"
import SideBar from "../Sidebar/SideBar"
import NavBar from "../Navbar/NavBar"
import { useState } from "react"
import "./layout.css"
import GlobalStyles, { darkTheme, lightTheme } from "../../GlobalStyles"
import SocialsSection from "../SocialsSection/SocialsSection"
import { ThemeProvider } from "styled-components"

const Layout = props => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState(darkTheme)
  const [isDark, setIsDark] = useState(true)

  const toggle = () => {
    setSideBarIsOpen(!sideBarIsOpen)
  }

  const themeToggle = () => {
    setIsDark(!isDark)
    if (activeTheme.id === "dark") {
      setActiveTheme(lightTheme)
    } else {
      setActiveTheme(darkTheme)
    }
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <div className="wrapper">
        <GlobalStyles />
        <SideBar isOpen={sideBarIsOpen} toggle={toggle}></SideBar>
        <NavBar
          toggle={toggle}
          themeToggle={themeToggle}
          isDark={isDark}
        ></NavBar>

        {props.children}
        <SocialsSection></SocialsSection>
      </div>
    </ThemeProvider>
  )
}

export default Layout
