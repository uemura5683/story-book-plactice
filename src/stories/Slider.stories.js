import { createslider } from './template/Slider';

export default {
  title: 'Component/Slider',
};

const Template = ({ label, ...args }) => {
  return createslider({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  classname: 'default',
};