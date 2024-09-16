import Select from ".";
import { useState } from "react";

export default {
  title: "components/Select",
  component: Select,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

const Template = (args) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (value) => {
    console.log(value);
    setSelectedOption(value);
  };

  return (
    <Select {...args} selectedOption={selectedOption} onChange={handleChange} />
  );
};

export const Example = Template.bind({});
Example.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  placeholder: "Choose an option",
};
