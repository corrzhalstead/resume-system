import { SearchBar } from "./SearchBar";

export default {
  title: "components/SearchBar",
  component: SearchBar,
  decorators: [
    (Story) => (
      <div style={{ width: "150px", fontSize: "16px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholderText: "(Search by...)",
  onInput: (value) => console.log(value),
  searchDelay: 0,
  minChar: 0,
};

export const MinimumChar = Template.bind({});
MinimumChar.args = {
  ...Default.args,
  minChar: 5,
};

export const Delay = Template.bind({});
Delay.args = {
  ...Default.args,
  searchDelay: 500,
};

export const DelayAndMin = Template.bind({});
DelayAndMin.args = {
  ...Delay.args,
  minChar: 5,
};
