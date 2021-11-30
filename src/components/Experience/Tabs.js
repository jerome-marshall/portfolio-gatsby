import React from "react";
import {
  StyledTabPanel,
  StylizedTab,
  TabHeaderContainer,
  TabsHolder,
} from "./ExperienceElements";

export const Tab = ({ lable, active, onClick }) => {
  return (
    <StylizedTab role="tab" active={active} onClick={onClick}>
      {lable}
    </StylizedTab>
  );
};

export const Tabs = ({ selectedTab, onChange, children }) => {
  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });
  return (
    <TabHeaderContainer>
      <TabsHolder>{tabs}</TabsHolder>
    </TabHeaderContainer>
  );
};

export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;

  return (
    <StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </StyledTabPanel>
  );
};
