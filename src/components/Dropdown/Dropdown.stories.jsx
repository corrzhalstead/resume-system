import React from "react";
import { Dropdown } from "./Dropdown";

// Define the default export for the story
export default {
  title: "Components/Button", // Story title
  component: Dropdown, // Component to showcase
};

// Template to generate Button stories
const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   primary: true,
//   label: "Button",
// };
