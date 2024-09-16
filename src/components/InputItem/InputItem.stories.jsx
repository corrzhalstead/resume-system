import { InputItem } from "./InputItem";

export default {
  title: "Events/InputItem",
  component: InputItem,
  decorators: [
    (Story) => (
      <div
        style={{
          background: "white",
          color: "black",
          width: "100%",
          height: "100%",
          padding: "20px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <InputItem {...args} />;

export const Example = Template.bind({});
Example.args = {
  label: "Event Name",
  value: "",
  placeholder: "Click to type",
  onChange: () => alert("onChange called"),
};
