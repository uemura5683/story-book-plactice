import { createAlert } from './template/alert';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Component/Alert',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    borderColor: { control: 'color' },
    label: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createAlert({ label, ...args });
};

export const PRIMARY = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
PRIMARY.args = {
  classname: 'primary',
  label: 'Primaryのアラートです',
};

export const SECONDARY = Template.bind({});
SECONDARY.args = {
  classname: 'secondary',
  label: 'Secondaryのアラートです',
};

export const SUCCESS = Template.bind({});
SUCCESS.args = {
  classname: 'success',
  label: 'Successのアラートです',
};

export const WARNING = Template.bind({});
WARNING.args = {
  classname: 'warning',
  label: 'Warningのアラートです',
};

export const ALRRT = Template.bind({});
ALRRT.args = {
  classname: 'alert',
  label: 'Alertのアラートです',
};
