import { InputItem } from "./InputItem";

export default {
  title: "components/InputItem",
  component: InputItem,
};

const Template = (args) => <InputItem {...args} />;

export const Example = Template.bind({});
Example.args = {
  label: "Event Name",
  value: "",
  placeholder: "Click to type",
  onChange: () => alert("onChange called"),
};
