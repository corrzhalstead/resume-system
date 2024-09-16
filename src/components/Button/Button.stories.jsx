import React from "react";
import { Button } from "./Button";

// Define the default export for the story
export default {
  title: "Components/Button", // Story title
  component: Button, // Component to showcase
};

// Template to generate Button stories
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Secondary Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};
