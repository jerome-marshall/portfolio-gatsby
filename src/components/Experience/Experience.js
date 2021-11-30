import React, { useState } from "react";
import {
  Container,
  ExperienceContent,
  StyledExperienceSection,
  TabPanelContainer,
  TabsContainer,
} from "./ExperienceElements";
import { Tab, TabPanel, Tabs } from "./Tabs";
import { workData } from "../../data/wrokData";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <StyledExperienceSection id="experience">
      <div className="container">
        <ExperienceContent>
          <h2 className="nav-heading">Where I've worked</h2>
          <Container>
            <TabsContainer>
              <Tabs selectedTab={activeTab} onChange={handleChange}>
                {workData &&
                  workData.map((data, i) => (
                    <Tab
                      key={data.company + "Tab"}
                      lable={data.company}
                      value={i}
                    ></Tab>
                  ))}
              </Tabs>
            </TabsContainer>
            <TabPanelContainer>
              {workData &&
                workData.map((data, i) => {
                  const { title, url, company, range, description } = data;
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
                      <ul>
                        {description &&
                          description.map((desc, j) => <li key={j}>{desc}</li>)}
                      </ul>
                    </TabPanel>
                  );
                })}
            </TabPanelContainer>
          </Container>
        </ExperienceContent>
      </div>
    </StyledExperienceSection>
  );
};

export default Experience;
