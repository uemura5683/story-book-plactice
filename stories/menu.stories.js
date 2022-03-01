import { createMenu } from './template/Menu';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Component/Menu',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  return createMenu({ label, ...args });
};

export const OPEN = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
OPEN.args = {
  classname: 'open',
};

export const CLOSE = Template.bind({});
CLOSE.args = {
  classname: 'close',
};