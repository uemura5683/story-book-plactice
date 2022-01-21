import { createbreadcrumb } from './template/Breadcrumb';

export default {
  title: 'Component/BreadCrumb',
};

const Template = ({ label, ...args }) => {
  return createbreadcrumb({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  classname: 'default',
};