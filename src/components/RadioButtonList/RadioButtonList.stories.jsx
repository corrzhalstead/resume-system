import { RadioButtonList } from "./RadioButtonList";

export default {
  title: "Components/RadioButtonList",
  component: RadioButtonList,
  decorators: [
    (Story) => <div style={{ background: "#FFFFFF" }}>{Story()}</div>,
  ],
};

const Template = (args) => <RadioButtonList {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: (option) => console.log(option),
  options: ["Male", "Female"],
};
