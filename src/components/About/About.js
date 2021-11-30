import React from "react";
import {
  StyledAboutSection,
  AboutContent,
  AboutSummary,
  StyledPic,
  Container,
} from "./AboutElements";
import MyPic from "../../images/me.jpg";

const AboutSection = () => {
  const skills = [
    "JavaScript (ES6+)",
    "Java",
    "Dart",
    "React",
    "MongoDB",
    "Flutter",
    "Node.js",
    "Firebase",
  ];

  return (
    <StyledAboutSection id="about">
      <AboutContent>
        <h2 className="nav-heading">About Me</h2>
        <Container>
          <AboutSummary>
            <div className="summary">
              <p>
                Hello! My name is Jerome and I enjoy creating things that live
                on the internet. My interest in Android and Web Development
                started back in 2017 when I decided to create a meme app — turns
                out a meme app taught me a lot about development and digital
                experiences.
              </p>
              <br />
              <p>
                Fast-forward to today, I've had the privilege to train myself in
                various bleeding-edge technologies to create amazing digital
                experiences. Currently, I'm working at Cognizant as a Program
                Analyst. But as development has become my passion, I'm obliged
                to get smarter every day. So when the opportunity arises, I
                could make the best use of my skills.
              </p>
              <br />
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="skills-list">
                {skills &&
                  skills.map((skill, i) => (
                    <li key={i}>
                      <span>{skill}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </AboutSummary>
          <StyledPic>
            <div className="wrapper">
              <img className="img" src={MyPic} alt="My Pic" width={350} />
            </div>
          </StyledPic>
        </Container>
      </AboutContent>
    </StyledAboutSection>
  );
};

export default AboutSection;
