import React from "react"
import {
  StyledAboutSection,
  AboutContent,
  AboutSummary,
  StyledPic,
  Container,
} from "./AboutElements"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import FadeHOC from "../FadeHOC/FadeHOC"

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query GetAboutPage {
      img: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }

      strapiAboutPage {
        descriptionPast
        descriptionPresent
        skillSet {
          name
        }
      }
    }
  `)

  const image = data.img.childImageSharp.gatsbyImageData

  const skills = data.strapiAboutPage.skillSet
  const skillSet = []

  for (const key in skills) {
    skillSet.push(skills[key].name)
  }

  const descriptionPast = data.strapiAboutPage.descriptionPast
  const descriptionPresent = data.strapiAboutPage.descriptionPresent

  return (
    <StyledAboutSection id="about">
      <FadeHOC>
        <AboutContent>
          <h2 className="nav-heading">About Me</h2>
          <Container>
            <AboutSummary>
              <div className="summary">
                <p>{descriptionPast}</p>
                <br />
                <p>{descriptionPresent}</p>
                <br />
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
                <ul className="skills-list">
                  {skillSet &&
                    skillSet.map((skill, i) => (
                      <li key={i}>
                        <span>{skill}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </AboutSummary>
            <StyledPic>
              <div className="wrapper">
                <GatsbyImage
                  className="img"
                  image={image}
                  alt="Jerome Marshall"
                />
                {/* <img className="img" src={MyPic} alt="My Pic" width={350} /> */}
              </div>
            </StyledPic>
          </Container>
        </AboutContent>
      </FadeHOC>
    </StyledAboutSection>
  )
}

export default AboutSection
