import React from "react"
import FadeHOC from "../FadeHOC/FadeHOC"
import { HeroContainer, HeroContent, Button } from "./HeroElements"
import { useStaticQuery, graphql } from "gatsby"

const Hero = ({data}) => {

  const {pageTitle, name, description, shortDescription } = data

  return (
    <HeroContainer id="hero">
      <FadeHOC>
        <HeroContent>
          <p className="myNameIs">{pageTitle}</p>
          <h1 className="name">{name}.</h1>
          <h2>{shortDescription}</h2>
          <p className="summary">{description}</p>

          <Button to="contact" smooth={true} duration={1000}>
            Get in touch
          </Button>
        </HeroContent>
      </FadeHOC>
    </HeroContainer>
  )
}

export default Hero
