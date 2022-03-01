import { createIcon } from './template/Icon';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Component/Icon',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    label: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createIcon({ label, ...args });
};

export const NEW = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
NEW.args = {
  classname: 'new',
  label: 'NEW',
};

export const SALE = Template.bind({});
SALE.args = {
  classname: 'sale',
  label: 'SALE',
};

export const SOLD_OUT = Template.bind({});
SOLD_OUT.args = {
  classname: 'soldout',
  label: 'SOLD OUT',
};

export const PRE_ORDER = Template.bind({});
PRE_ORDER.args = {
  classname: 'order',
  label: 'PRE ORDER',
};
