import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import {
  SectionWrapper,
  SectionContainer,
  IconCard,
  CreditSectionWrapper,
  CreditSectionContainer,
} from "./SocialsSectionElements"
import { FiGithub as IconGitHub } from "react-icons/fi"
import { FiLinkedin as IconLinkedIn } from "react-icons/fi"
import { FiPhone as IconPhone } from "react-icons/fi"
import { BsStackOverflow as IconStackoverflow } from "react-icons/bs"
import { FiMail as IconMail } from "react-icons/fi"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider, useTheme } from "styled-components"

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

  const data = useStaticQuery(graphql`
    query GetSocials {
      glstrapi {
        globalDatum {
          socials {
            displayName
            name
            url
          }
        }
      }
    }
  `)

  const iconsLocation = {
    left: ["github", "linkedin", "stackoverflow"],
    right: ["phone", "email"],
  }

  const iconCardWidths = {
    github: "103",
    linkedin: "115",
    stackoverflow: "157",
    phone: "163",
    email: "253",
  }

  let adjustment = 10

  const socialsData = data.glstrapi.globalDatum.socials

  const theme = useTheme()
  console.log("🚀 ~ file: SocialsSection.js ~ line 64 ~ LeftandRightSection ~ theme", theme)

  if (typeof window !== "undefined") {
    adjustment = (window.innerWidth - theme.header_width + 10) / 2
    if (adjustment < 0) {
      adjustment = 10
    }
  }

  // let adjustment = (window.innerWidth - theme.header_width + 10) / 2
  // if (adjustment < 0) {
  //   adjustment = 10
  // }

  const CreditSectionIcons = socialsData.map((social, index) => {
    const Icon =
      social.name === "github"
        ? IconGitHub
        : social.name === "linkedin"
        ? IconLinkedIn
        : social.name === "stackoverflow"
        ? IconStackoverflow
        : social.name === "phone"
        ? IconPhone
        : social.name === "email"
        ? IconMail
        : null

    return (
      <IconCard
        key={social.displayName + index}
        href={social.url}
        target={
          social.name !== "phone" && social.name !== "phone" ? "_blank" : ""
        }
      >
        <Icon />
        <span>{social.displayName}</span>
      </IconCard>
    )
  })

  return (
    <SectionWrapper>
      <SectionContainer left data-aos="fade-right" adjustment={adjustment}>
        <div className="cards">
          <IconCard left width="103" href={socialsData[0].url} target="_blank">
            <IconGitHub />
            <span>{socialsData[0].displayName}</span>
          </IconCard>

          <IconCard left width="115" href={socialsData[1].url} target="_blank">
            <IconLinkedIn />
            <span>{socialsData[1].displayName}</span>
          </IconCard>

          <IconCard left width="157" href={socialsData[2].url} target="_blank">
            <IconStackoverflow />
            <span>{socialsData[2].displayName}</span>
          </IconCard>
        </div>
        <div className="bar">
          <p></p>
        </div>
      </SectionContainer>

      <SectionContainer right data-aos="fade-left" adjustment={adjustment}>
        <div className="cards">
          <IconCard right width="253" href={socialsData[3].url} target="_blank">
            <IconMail />
            <span>{socialsData[3].displayName}</span>
          </IconCard>

          <IconCard right width="163" href={socialsData[4].url}>
            <IconPhone />
            <span>{socialsData[4].displayName}</span>
          </IconCard>
        </div>
        <div className="bar">
          <p></p>
        </div>
      </SectionContainer>

      <CreditSectionWrapper>
        <CreditSectionContainer>
          <div className="credit">
            <p>Designed & Built by Jerome Marshall</p>
          </div>
          <div className="icons">{CreditSectionIcons}</div>
        </CreditSectionContainer>
      </CreditSectionWrapper>
    </SectionWrapper>
  )
}

export default LeftandRightSection
