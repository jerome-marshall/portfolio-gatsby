import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import {
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
      allStrapiSocials(sort: { fields: id, order: ASC }) {
        nodes {
          href
          name
          displayName
        }
      }
    }
  `)

  const socialsData = data.allStrapiSocials.nodes

  return (
    <>
      <SectionContainer left data-aos="fade-right">
        <div className="cards">
          <IconCard left width="103" href={socialsData[0].href} target="_blank">
            <IconGitHub />
            <span>{socialsData[0].displayName}</span>
          </IconCard>

          <IconCard left width="115" href={socialsData[1].href} target="_blank">
            <IconLinkedIn />
            <span>{socialsData[1].displayName}</span>
          </IconCard>

          <IconCard left width="157" href={socialsData[2].href} target="_blank">
            <IconStackoverflow />
            <span>{socialsData[2].displayName}</span>
          </IconCard>
        </div>
        <div className="bar">
          <p></p>
        </div>
      </SectionContainer>
      <SectionContainer right data-aos="fade-left">
        <div className="cards">
          <IconCard
            right
            width="253"
            href={socialsData[3].href}
            target="_blank"
          >
            <IconMail />
            <span>{socialsData[3].displayName}</span>
          </IconCard>

          <IconCard right width="163" href={socialsData[4].href}>
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
          <div className="icons">
            <IconCard href={socialsData[0].href} target="_blank">
              <IconGitHub />
              <span>{socialsData[0].displayName}</span>
            </IconCard>

            <IconCard href={socialsData[1].href} target="_blank">
              <IconLinkedIn />
              <span>{socialsData[1].displayName}</span>
            </IconCard>

            <IconCard href={socialsData[2].href} target="_blank">
              <IconStackoverflow />
              <span>{socialsData[2].displayName}</span>
            </IconCard>
            <IconCard href={socialsData[3].href} target="_blank">
              <IconMail />
              <span>{socialsData[3].displayName}</span>
            </IconCard>

            <IconCard href={socialsData[4].href}>
              <IconPhone />
              <span>{socialsData[4].displayName}</span>
            </IconCard>
          </div>
        </CreditSectionContainer>
      </CreditSectionWrapper>
    </>
  )
}

export default LeftandRightSection
