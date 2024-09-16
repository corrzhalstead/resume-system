import React from "react";
import { Button } from "./Button";

// Define the default export for the story
export default {
  title: "Components/Button", // Story title
  component: Button, // Component to showcase
};

// Template to generate Button stories
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: "Button",
};
