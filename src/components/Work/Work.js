import React from "react";
import { ProjectLI, StyledWorkSection, WorkContent } from "./WorkElements";
import { IconFolder } from "../icons/folder";
import { IconGitHub } from "../icons/github";
import { IconExternal } from "../icons/external";
import { projectData } from "../../data/projectData";

const Work = () => {
  return (
    <StyledWorkSection id="work">
      <WorkContent>
        <h2>Some things I've built</h2>
        <ul className="project-grid">
          {projectData &&
            projectData.map((data, i) => {
              const { title, description, techStack, git, ext } = data;
              return (
                <ProjectLI key={title + i}>
                  <div className="leftIcon">
                    <IconFolder />
                  </div>
                  <div className="rightIcons">
                    <a href={git} target="_blank" rel="noreferrer">
                      <IconGitHub className="rightIcon" />
                    </a>{" "}
                    <a href={ext} target="_blank" rel="noreferrer">
                      <IconExternal className="rightIcon" />
                    </a>
                  </div>
                  <div className="content">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                  </div>
                  <ul>
                    {techStack &&
                      techStack.map((tech, j) => (
                        <li key={tech + j}>{tech}</li>
                      ))}
                  </ul>
                </ProjectLI>
              );
            })}
        </ul>
      </WorkContent>
    </StyledWorkSection>
  );
};

export default Work;
