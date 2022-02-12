import { createslider } from './template/Slider';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Component/Slider',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  return createslider({ label, ...args });
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  classname: 'default',
};