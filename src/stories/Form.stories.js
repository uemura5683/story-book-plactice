import { createForm } from './template/Form';

export default {
  title: 'Component/Form',
};

const Template = ({ label, ...args }) => {
  return createForm({ label, ...args });
};

export const TEMPLATE = Template.bind({});
TEMPLATE.args = {
  classname: 'template',
  label: 'TEMPLATE',
};
