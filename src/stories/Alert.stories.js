import { createAlert } from './template/Alert';

export default {
  title: 'Component/Alert',
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    borderColor: { control: 'color' },
    label: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return createAlert({ label, ...args });
};

export const PRIMARY = Template.bind({});
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
