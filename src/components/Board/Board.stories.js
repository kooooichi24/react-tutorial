import React from 'react';

import { Board } from './Board';
import * as SquareStories from '../Square/Square.stories';

export default {
  title: 'Board',
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const AllNull = Template.bind({});
AllNull.args = {
  squares: Array(9).fill(SquareStories.Null.args.value),
};

export const AllCircle = Template.bind({});
AllCircle.args = {
  squares: Array(9).fill(SquareStories.Circle.args.value),
};

export const AllCross = Template.bind({});
AllCross.args = {
  squares: Array(9).fill(SquareStories.Cross.args.value),
};

export const AllTriangle = Template.bind({});
AllTriangle.args = {
  squares: Array(9).fill(SquareStories.Triangle.args.value),
};

export const Random = Template.bind({});
Random.args = {
  squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, 'O' ],
};