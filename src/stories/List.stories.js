import { createlist } from './template/List';

export default {
  title: 'Component/List',
};

const Template = ({ label, ...args }) => {
  return createlist({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  classname: 'default',
};

export const Focus = Template.bind({});
Focus.args = {
  classname: 'focus',
};