import { createSpinners } from './template/Spinners';

export default {
  title: 'Component/Spinners',
};

const Template = ({ label, ...args }) => {
  return createSpinners({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
