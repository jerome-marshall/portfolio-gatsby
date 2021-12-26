import React from "react"
import SideBar from "../Sidebar/SideBar"
import NavBar from "../NavBar/NavBar"
import { useState } from "react"
import "./layout.css"
import GlobalStyles from "../../GlobalStyles"
import LeftandRightSection from "../LeftandRightSection/LeftandRightSection"

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
      <LeftandRightSection></LeftandRightSection>
      {props.children}
    </div>
  )
}

export default Layout
