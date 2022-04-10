import React from "react"
import SideBar from "../Sidebar/SideBar"
import NavBar from "../Navbar/NavBar"
import { useState } from "react"
import "./layout.css"
import GlobalStyles, { darkTheme, lightTheme } from "../../GlobalStyles"
import SocialsSection from "../SocialsSection/SocialsSection"
import { ThemeProvider, useTheme  } from "styled-components"

const Layout = props => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState(darkTheme)
  const [isDark, setIsDark] = useState(true)
  const [themeChanging, setThemeChanging] = useState(false)

  

  const toggle = () => {
    setSideBarIsOpen(!sideBarIsOpen)
  }

  const themeToggle = () => {
    setThemeChanging(true)
    setIsDark(!isDark)

    if (activeTheme.id === "dark") {
      setActiveTheme(lightTheme)
    } else {
      setActiveTheme(darkTheme)
    }

    setTimeout(() => {
      setThemeChanging(false);
      console.log("theme changing", themeChanging)
    }, 2000);
  }

  return (
    <ThemeProvider theme={{...activeTheme, themeChanging}}>
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
