import Sidebar from '.'

export default {
  title: 'Components/Sidebar',
  Component: Sidebar
}

const Template = (args) => <Sidebar {...args} />

export const Default = Template.bind({})

Default.args = {
  isOpen: true
}