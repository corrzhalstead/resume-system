import { PersonalInfo } from "./PersonalInfo";

export default {
  title: "components/PersonalInfo",
  component: PersonalInfo,
};

const Template = (args) => <PersonalInfo {...args} />;

export const Example = Template.bind({});
Example.args = {
  firstName: "John",
  middleName: "A.",
  lastName: "Doe",
  gender: "male",
  birthdate: "01/01/1990",
  age: "32",
  onChange: () => alert("onChange called"),
};
