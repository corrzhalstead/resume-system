import React from "react";
import Card from "./Card";
export default {
  title: "components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  applicants: {
    firstname: "John",
    lastname: "Doe",
    email: "johnDoe@gmail.com",
    phone: "1234567890",
  },
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: (
    <div>
      <h3>A Card Title</h3>
      <ul>
        <li>list item #1</li>
        <li>list item #2</li>
        <li>list item #3</li>
      </ul>
    </div>
  ),
};
