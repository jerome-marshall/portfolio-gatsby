import React from "react"
import { SectionContainer } from "../LeftandRightSection/LeftandRightSectionElements"
import { FiGithub as IconGitHub } from "react-icons/fi"
import { FiLinkedin as IconLinkedIn } from "react-icons/fi"
import { FiPhone as IconPhone } from "react-icons/fi"
import { BsStackOverflow as IconStackoverflow } from "react-icons/bs"
import { FiMail as IconMail } from "react-icons/fi"

const LeftandRightSection = () => {
  return (
    <>
      <SectionContainer left>
        <div className="cards">
          <div className="iconCard">
            <IconGitHub />
            <span>Github</span>
          </div>
          <div className="iconCard">
            <IconLinkedIn />
            <span>LinkedIn</span>
          </div>
          <div className="iconCard">
            <IconStackoverflow />
            <span>Stack Overflow</span>
          </div>
        </div>
        <div className="bar">
          <p></p>
        </div>
      </SectionContainer>
      <SectionContainer right>
        <div className="cards">
          <div className="iconCard">
            <span>jeromemarshall0@gmail.com</span>
            <IconMail />
          </div>
          <div className="iconCard">
            <span>+91 9159115328</span>
            <IconPhone />
          </div>
        </div>
        <div className="bar">
          <p></p>
        </div>
      </SectionContainer>
    </>
  )
}

export default LeftandRightSection
