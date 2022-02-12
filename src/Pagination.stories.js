import { createpagination } from './template/Pagination';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Component/Pagination',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    label: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  return createpagination({ label, ...args });
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  classname: 'default',
};

export const ACTIVE = Template.bind({});
ACTIVE.args = {
  classname: 'active',
};

export const PREV_ACTIVE = Template.bind({});
PREV_ACTIVE.args = {
  classname: 'prev-active',
};

export const NEXT_ACTIVE = Template.bind({});
NEXT_ACTIVE.args = {
  classname: 'next-active',
};