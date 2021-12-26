import React, { useState } from "react"
import {
  Container,
  ExperienceContent,
  StyledExperienceSection,
  TabPanelContainer,
  TabsContainer,
} from "./ExperienceElements"
import { Tab, TabPanel, Tabs } from "./Tabs"
import { useStaticQuery, graphql } from "gatsby"
import FadeHOC from "../FadeHOC/FadeHOC"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query JobsQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
      ) {
        nodes {
          frontmatter {
            company
            location
            range
            title
            url
          }
          html
        }
      }
    }
  `)

  const jobsData = data.allMarkdownRemark.nodes

  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (e, value) => {
    setActiveTab(value)
  }

  return (
    <StyledExperienceSection id="experience">
      <FadeHOC>
        <div className="container">
          <ExperienceContent>
            <h2 className="nav-heading">Where I've worked</h2>
            <Container>
              <TabsContainer>
                <Tabs selectedTab={activeTab} onChange={handleChange}>
                  {jobsData &&
                    jobsData.map((data, i) => {
                      const company = data.frontmatter.company
                      return (
                        <Tab
                          key={company + "Tab"}
                          lable={company}
                          value={i}
                        ></Tab>
                      )
                    })}
                </Tabs>
              </TabsContainer>
              <TabPanelContainer>
                {jobsData &&
                  jobsData.map((data, i) => {
                    const { title, url, company, range } = data.frontmatter
                    return (
                      <TabPanel
                        key={company + "TabPanel"}
                        value={activeTab}
                        selectedIndex={i}
                      >
                        <h3>
                          <span className="title">{title}</span>
                          <span className="company">
                            &nbsp;@&nbsp;
                            <a
                              href={url}
                              className="url"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {company}
                            </a>
                          </span>
                        </h3>
                        <p className="expTime">{range}</p>

                        {/* job description */}
                        <div
                          dangerouslySetInnerHTML={{ __html: data.html }}
                        ></div>
                      </TabPanel>
                    )
                  })}
              </TabPanelContainer>
            </Container>
          </ExperienceContent>
        </div>
      </FadeHOC>
    </StyledExperienceSection>
  )
}

export default Experience
