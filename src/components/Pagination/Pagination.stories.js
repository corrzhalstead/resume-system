import React from "react";

import Pagination from "./Pagination";

export default {
  title: "components/Pagination",
  component: Pagination,
};

const Template = (args) => <Pagination {...args}>{args.children}</Pagination>;

export const Default = Template.bind({});
Default.args = {
  page: 2,
  lastPage: 5,
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  page: 1,
  lastPage: 5,
};

export const LastPage = Template.bind({});
LastPage.args = {
  page: 5,
  lastPage: 5,
};

export const DisableNext = Template.bind({});
DisableNext.args = {
  page: 4,
  lastPage: 5,
  disableNext: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  page: 3,
  lastPage: 5,
  disabled: true,
};
