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
import ReactMarkdown from 'react-markdown'

const AboutSection = ({data}) => {
  const imgData = useStaticQuery(graphql`
    query GetImg {
      img: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)

  const { description, pageTitle, skillset } = data
  const image = imgData.img.childImageSharp.gatsbyImageData

  return (
    <StyledAboutSection id="about">
      <FadeHOC>
        <AboutContent>
          <h2 className="nav-heading">{pageTitle}</h2>
          <Container>
            <AboutSummary>
              <div className="summary">
                <ReactMarkdown>{description}</ReactMarkdown>
                <ul className="skills-list">
                  {skillset &&
                    skillset.map((skill, i) => (
                      <li key={skill.name + i}>
                        <span>{skill.name}</span>
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
                  alt="Jerome Marshall's portrait"
                />
              </div>
            </StyledPic>
          </Container>
        </AboutContent>
      </FadeHOC>
    </StyledAboutSection>
  )
}

export default AboutSection
