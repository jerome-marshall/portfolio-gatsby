import React from "react"
import { ProjectLI, StyledWorkSection, WorkContent } from "./WorkElements"
import { IconFolder } from "../icons/folder"
import { IconGitHub } from "../icons/github"
import { IconExternal } from "../icons/external"
import { useStaticQuery, graphql } from "gatsby"

const Work = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        nodes {
          frontmatter {
            title
            github
            external
            techStack
          }
          html
        }
      }
    }
  `)

  const projectData = data.allMarkdownRemark.nodes

  return (
    <StyledWorkSection id="work">
      <WorkContent>
        <h2>Some things I've built</h2>
        <ul className="project-grid">
          {projectData &&
            projectData.map((data, i) => {
              const { title, techStack, github, external } = data.frontmatter
              return (
                <ProjectLI key={title + i}>
                  <div className="leftIcon">
                    <IconFolder />
                  </div>
                  <div className="rightIcons">
                    <a href={github} target="_blank" rel="noreferrer">
                      <IconGitHub className="rightIcon" />
                    </a>{" "}
                    <a href={external} target="_blank" rel="noreferrer">
                      <IconExternal className="rightIcon" />
                    </a>
                  </div>
                  <div className="content">
                    <h3 className="title">{title}</h3>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{ __html: data.html }}
                    ></div>
                  </div>
                  <ul>
                    {techStack &&
                      techStack.map((tech, j) => (
                        <li key={tech + j}>{tech}</li>
                      ))}
                  </ul>
                </ProjectLI>
              )
            })}
        </ul>
      </WorkContent>
    </StyledWorkSection>
  )
}

export default Work
