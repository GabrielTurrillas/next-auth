import Home from '../pages/index'

export default {
  title: 'Home',
  component: Home
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})

Default.args = {}

