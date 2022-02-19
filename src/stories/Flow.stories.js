import { createflow } from './template/Flow';

export default {
  title: 'Component/Flow',
};

const Template = ({ label, ...args }) => {
  return createflow({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  classname: 'default',
};