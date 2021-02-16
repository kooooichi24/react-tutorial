import React from 'react';

import { Board } from '../components/Board/Board';

export default {
  title: 'Board',
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const AllNull = Template.bind({});
AllNull.args = {
  squares: Array(9).fill(null),
};

export const AllCircle = Template.bind({});
AllCircle.args = {
  squares: Array(9).fill('O'),
};

export const AllCross = Template.bind({});
AllCross.args = {
  squares: Array(9).fill('X'),
};

export const AllTriangle = Template.bind({});
AllTriangle.args = {
  squares: Array(9).fill('△'),
};

export const Random = Template.bind({});
Random.args = {
  squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, 'O' ],
};