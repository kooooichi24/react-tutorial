import React from 'react';

import { Square } from '../components/Square/Square';

export default {
  title: 'Square',
  component: Square,
};

const Template = (args) => <Square {...args} />;


export const Null = Template.bind({});
Null.args = {
  value: null,
};


export const Circle = Template.bind({});
Circle.args = {
  value: 'O',
};

export const Cross = Template.bind({});
Cross.args = {
  value: 'X'
};

export const Triangle = Template.bind({});
Triangle.args = {
  value: '△'
};
