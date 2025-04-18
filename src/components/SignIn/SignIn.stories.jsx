import React from "react";
import { SignIn } from "./SignIn";

// Define the default export for the story
export default {
  title: "Components/SignIn", // Story title
  component: SignIn, // Component to showcase
};

// Template to generate Button stories
const Template = (args) => <SignIn {...args} />;

export const Default = Template.bind({});
