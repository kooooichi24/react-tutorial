import React from 'react';

import { Square } from './Square';

export default {
  title: 'Square',
  component: Square,
};

const Template = (args) => <Square {...args} />;


export const Default = Template.bind({});
Default.args = {
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

export const Han = Template.bind({});
Han.args = {
  value: '半'
};

export const Cho = Template.bind({});
Cho.args = {
  value: '丁'
};
