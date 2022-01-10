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

const Experience = () => {
  const data = useStaticQuery(graphql`
    query GetExperiencePage {
      strapiExperiencePage {
        workDetails {
          companyName
          designation
          timePeriod
          url
          workDone
          doj(formatString: "YYMMDD")
        }
      }
    }
  `)

  const jobsData = data.strapiExperiencePage.workDetails

  console.log(jobsData)

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
                      const company = data.companyName
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
                    const {
                      designation,
                      url,
                      companyName,
                      timePeriod,
                      workDone,
                    } = data
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
                        <p className="expTime">{timePeriod}</p>

                        {/* job description */}
                        <div>
                          <ReactMarkdown>{workDone}</ReactMarkdown>
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
