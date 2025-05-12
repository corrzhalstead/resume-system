import React from "react";
import { NavBar } from "./NavBar";

// Define the default export for the story
export default {
  title: "Components/NavBar", // Story title
  component: NavBar, // Component to showcase
};

// Template to generate Button stories
const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: "Button",
};
