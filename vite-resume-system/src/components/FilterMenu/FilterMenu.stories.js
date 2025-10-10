import React from "react";
import FilterMenu from "./FilterMenu";

export default {
  component: FilterMenu,
  title: "Components/FilterMenu",
  argTypes: {
    onFilter: { action: "onFilter triggered" },
    jobData: { control: "object" },
  },
};

const jobData = {
  Engineering: ["Frontend Developer", "Backend Developer", "Full Stack"],
  Design: ["UI Designer", "UX Designer", "Graphic Designer"],
  Marketing: ["Content Strategist", "SEO Specialist", "Digital Marketer"],
  HR: ["Recruiter", "HR Generalist", "Talent Acquisition"],
};

const Template = (args) => <FilterMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  jobData,
  onFilter: (filters) => console.log("Filters applied:", filters),
};
