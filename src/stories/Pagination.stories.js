import { createpagination } from './template/Pagination';

export default {
  title: 'Component/Pagination',
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    label: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return createpagination({ label, ...args });
};

export const Default = Template.bind({});
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