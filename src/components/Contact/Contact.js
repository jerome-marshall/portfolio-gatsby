import React from "react"
import FadeHOC from "../FadeHOC/FadeHOC"
import { ContactContainer, ContactContent, StyledA } from "./ContactElements"

const Contact = ({data}) => {
  const { pageTitleIntro, pageTitle, description } = data

  return (
    <ContactContainer id="contact">
      <FadeHOC animation="fade-up">
        <ContactContent>
          <p className="sub-title">{pageTitleIntro}</p>
          <h2 className="title">{pageTitle}</h2>
          <p className="description">
            {description}
          </p>
          <StyledA href={`mailto:jeromemarshall0@gmail.com`} target="_blank">
            Say Hello
          </StyledA>
        </ContactContent>
      </FadeHOC>
    </ContactContainer>
  )
}

export default Contact
