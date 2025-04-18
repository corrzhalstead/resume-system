import React from "react";
import { SignUp } from "./SignUp";

// Define the default export for the story
export default {
  title: "Components/SignUp", // Story title
  component: SignUp, // Component to showcase
};

// Template to generate Button stories
const Template = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
