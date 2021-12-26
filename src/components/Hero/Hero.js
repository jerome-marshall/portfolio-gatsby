import React from "react"
import FadeHOC from "../FadeHOC/FadeHOC"
import { HeroContainer, HeroContent, Button } from "./HeroElements"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <FadeHOC>
        <HeroContent>
          <p className="myNameIs">Hi, my name is</p>
          <h1 className="name">Jerome Marshall.</h1>
          <h2>I build things for mobile and the web.</h2>
          <p className="summary">
            I'm a software engineer, building (and occasionally designing)
            user-friendly digital experiences. Currently, I'm looking for an
            oppurtunity where I can make the best use of my development skills
            for the better.
          </p>

          <Button to="contact" smooth={true} duration={1000}>
            Get in touch
          </Button>
        </HeroContent>
      </FadeHOC>
    </HeroContainer>
  )
}

export default Hero
