import React, { useState, useEffect } from "react";
import { TextArea } from "./TextArea";

export default {
  title: "components/TextArea",
  component: TextArea,
  decorators: [
    (Story) => (
      <div style={{ width: "500px", height: "200px", fontSize: "16px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const _value = args.value ? args.value : "";
  const [value, setValue] = useState(_value);

  // ignore: updates canvas with control input. Only for presentation.
  useEffect(() => {
    setValue(_value);
  }, [_value]);

  console.log(value);
  return <TextArea {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Additional Information (internal)",
  value: "",
  placeholder: "Click to type",
};
