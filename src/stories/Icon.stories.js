import { createIcon } from './template/Icon';

export default {
  title: 'Component/Icon',
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    label: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return createIcon({ label, ...args });
};

export const NEW = Template.bind({});
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
