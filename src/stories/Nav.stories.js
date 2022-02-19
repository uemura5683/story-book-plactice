import { createnav } from './template/Nav';

export default {
  title: 'Component/Nav',
};

const Template = ({ label, ...args }) => {
  return createnav({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  classname: 'default',
};

export const Focus = Template.bind({});
Focus.args = {
  classname: 'focus',
};