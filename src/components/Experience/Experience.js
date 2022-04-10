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
import ReactMarkdown from "react-markdown"

const Experience = ({data}) => {

  const { pageTitle, jobs} = data
  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (e, value) => {
    setActiveTab(value)
  }

  return (
    <StyledExperienceSection id="experience">
      <FadeHOC animation="fade-up">
        <div className="container">
          <ExperienceContent>
            <h2 className="nav-heading">{pageTitle}</h2>
            <Container>
              <TabsContainer>
                <Tabs selectedTab={activeTab} onChange={handleChange}>
                  {jobs &&
                    jobs.map((job, i) => {
                      const company = job.companyName
                      return (
                        <Tab
                          key={company + "Tab"}
                          label={company}
                          value={i}
                        ></Tab>
                      )
                    })}
                </Tabs>
              </TabsContainer>
              <TabPanelContainer>
                {jobs &&
                  jobs.map((job, i) => {

                    const {
                      designation,
                      url,
                      companyName,
                      range,
                      workDescription,
                    } = job
                    return (
                      <TabPanel
                        key={companyName + "TabPanel"}
                        value={activeTab}
                        selectedIndex={i}
                      >
                        <h3>
                          <span className="title">{designation}</span>
                          <span className="company">
                            &nbsp;@&nbsp;
                            <a
                              href={url}
                              className="url"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {companyName}
                            </a>
                          </span>
                        </h3>
                        <p className="expTime">{range}</p>

                        {/* job description */}
                        <div>
                          <ReactMarkdown>{workDescription}</ReactMarkdown>
                        </div>
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
