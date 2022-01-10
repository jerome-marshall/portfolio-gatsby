import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { SectionContainer } from "../LeftandRightSection/LeftandRightSectionElements"
import { FiGithub as IconGitHub } from "react-icons/fi"
import { FiLinkedin as IconLinkedIn } from "react-icons/fi"
import { FiPhone as IconPhone } from "react-icons/fi"
import { BsStackOverflow as IconStackoverflow } from "react-icons/bs"
import { FiMail as IconMail } from "react-icons/fi"

const LeftandRightSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  useEffect(() => {
    if (Aos) {
      Aos.refresh()
    }
  })

  return (
    <>
      <SectionContainer left data-aos="fade-right">
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
      <SectionContainer right data-aos="fade-left">
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
