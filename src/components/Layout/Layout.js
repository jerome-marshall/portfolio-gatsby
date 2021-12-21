import React from "react"
import SideBar from "../Sidebar/SideBar"
import NavBar from "../NavBar/NavBar"
import { useState } from "react"
import "./layout.css"
import GlobalStyles from "../../GlobalStyles"
import LeftSection from "../LeftSection/LeftSection"

const Layout = props => {
  const [SideBarIsOpen, setSideBarIsOpen] = useState(false)

  const toggle = () => {
    setSideBarIsOpen(!SideBarIsOpen)
  }

  return (
    <div className="wrapper">
      <GlobalStyles />
      <SideBar isOpen={SideBarIsOpen} toggle={toggle}></SideBar>
      <NavBar toggle={toggle}></NavBar>
      <LeftSection></LeftSection>
      {props.children}
    </div>
  )
}

export default Layout
