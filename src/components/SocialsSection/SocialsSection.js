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
import { useWindowSize } from "../../hooks/window-size"

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

  const [windowWidth] = useWindowSize()
  let adjustment = (windowWidth - 1500 + 10) / 2
  if (adjustment < 20) {
    adjustment = 20
  }

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

  const socialsData = data.glstrapi.globalDatum.socials

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

  const getIcon = iconName => {
    const Icon =
      iconName === "github"
        ? IconGitHub
        : iconName === "linkedin"
        ? IconLinkedIn
        : iconName === "stackoverflow"
        ? IconStackoverflow
        : iconName === "phone"
        ? IconPhone
        : iconName === "email"
        ? IconMail
        : null

    return Icon
  }

  const CreditSectionIcons = socialsData.map((social, index) => {
    const Icon = getIcon(social.name)

    return (
      <IconCard
        key={social.displayName + index}
        href={social.url}
        target={social.name !== "phone" && "_blank"}
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
          {socialsData.map(social => {
            if (iconsLocation.right.includes(social.name)) return null

            const Icon = getIcon(social.name)

            return (
              <IconCard
                key={social.name}
                href={social.url}
                width={iconCardWidths[social.name]}
                left
                target={social.name !== "phone" && "_blank"}
              >
                <Icon />
                <span>{social.displayName}</span>
              </IconCard>
            )
          })}
        </div>
        <div className="bar">
          <p></p>
        </div>
      </SectionContainer>

      <SectionContainer right data-aos="fade-left" adjustment={adjustment}>
        <div className="cards">
          {socialsData.map(social => {
            if (iconsLocation.left.includes(social.name)) return null

            const Icon = getIcon(social.name)

            return (
              <IconCard
                key={social.name}
                href={social.url}
                width={iconCardWidths[social.name]}
                right
                target={social.name !== "phone" && "_blank"}
              >
                <Icon />
                <span>{social.displayName}</span>
              </IconCard>
            )
          })}
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
