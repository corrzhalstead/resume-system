import React from "react";
import Card from "./index";
export default {
  title: "components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Quite a nice card.",
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
