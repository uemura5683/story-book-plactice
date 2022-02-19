import { createMenu } from './template/Menu';

export default {
  title: 'Component/Menu',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = ({ label, ...args }) => {
  return createMenu({ label, ...args });
};

export const OPEN = Template.bind({});
OPEN.args = {
  classname: 'open',
};

export const CLOSE = Template.bind({});
CLOSE.args = {
  classname: 'close',
};