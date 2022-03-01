import { createcard } from './template/Card';

export default {
  title: 'Component/Card',
};

const Template = ({ label, ...args }) => {
  return createcard({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  classname: 'default',
};