import PrimaryButton from ".";
import { color } from "../../styles";

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <PrimaryButton {...args} />

export const Default = Template.bind({})

Default.args = {
  bgColor: color.primary,
  fontColor: 'white'
}