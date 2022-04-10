import React from "react"
import {
  ProjectLI,
  StyledProjectsSection,
  ProjectsContent,
} from "./ProjectsElements"
import { FiGithub as IconGitHub } from "react-icons/fi"
import { FiExternalLink as IconExternal } from "react-icons/fi"
import { FiFolder as IconFolder } from "react-icons/fi"
import { useStaticQuery, graphql } from "gatsby"
import FadeHOC from "../FadeHOC/FadeHOC"


const Projects = (props) => {

const { pageTitle, projects } = props.data

  return (
    <StyledProjectsSection id="projects">
      <FadeHOC animation="fade-up">
        <ProjectsContent>
          <h2>{pageTitle}</h2>
          <ul className="project-grid">
            {projects &&
              projects.map((data, i) => {
                const { name, techStack, githubURL, externalURL, description } = data
                return (
                  <ProjectLI key={name + i}>
                    <div className="leftIcon">
                      <IconFolder />
                    </div>
                    <div className="rightIcons">
                      <a href={githubURL} target="_blank" rel="noreferrer">
                        <IconGitHub className="rightIcon" />
                      </a>{" "}
                      <a href={externalURL} target="_blank" rel="noreferrer">
                        <IconExternal className="rightIcon" />
                      </a>
                    </div>
                    <div className="content">
                      <h3 className="title">{name}</h3>
                      <div className="description">
                        <p>{description}</p>
                      </div>
                    </div>
                    <ul>
                      {techStack &&
                        techStack.map((tech, j) => (
                          <li key={tech.name + j}>{tech.name}</li>
                        ))}
                    </ul>
                  </ProjectLI>
                )
              })}
          </ul>
        </ProjectsContent>
      </FadeHOC>
    </StyledProjectsSection>
  )
}

export default Projects
