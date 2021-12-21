import React from "react"
import {
  LeftSectionContainer,
  RightSectionContainer,
} from "./LeftSectionElements"
import { FiGithub as IconGitHub } from "react-icons/fi"
import { FiLinkedin as IconLinkedIn } from "react-icons/fi"
import { FiPhone as IconPhone } from "react-icons/fi"
import { BsStackOverflow as IconStackoverflow } from "react-icons/bs"
import { FiMail as IconMail } from "react-icons/fi"

const LeftSection = () => {
  return (
    <>
      <LeftSectionContainer>
        <div className="icons">
          <IconGitHub />
          <IconLinkedIn />
          <IconStackoverflow />
          <p></p>
        </div>
      </LeftSectionContainer>
      <RightSectionContainer>
        <div className="icons">
          <IconMail />
          <IconPhone />
          <p></p>
        </div>
      </RightSectionContainer>
    </>
  )
}

export default LeftSection
