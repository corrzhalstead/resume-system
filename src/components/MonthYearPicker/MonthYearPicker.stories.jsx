import React from "react";
import MonthYearPicker from "./MonthYearPicker";
export default {
  title: "components/MonthYearPicker",
  component: MonthYearPicker,
};

const Template = (args) => <MonthYearPicker {...args} />;

export const Default = Template.bind({});
Default.args = {};
