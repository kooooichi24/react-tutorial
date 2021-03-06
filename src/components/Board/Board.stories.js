import React from 'react';

import { Board } from './Board';
import * as SquareStories from '../Square/Square.stories';

export default {
  title: 'Board',
  component: Board,
  args: {
    width: 3,
    height: 3,
  },
};

const SquareDefault = SquareStories.Default.args.value;
const SquareCircle = SquareStories.Circle.args.value;
const SquareCross = SquareStories.Cross.args.value;
const SquareTriangle = SquareStories.Triangle.args.value;
const SquareHan = SquareStories.Han.args.value;
const SquareCho = SquareStories.Cho.args.value;

const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(SquareDefault),
};

export const AllCircle = Template.bind({});
AllCircle.args = {
  squares: Array(9).fill(SquareCircle),
};

export const AllCross = Template.bind({});
AllCross.args = {
  squares: Array(9).fill(SquareCross),
};

export const AllTriangle = Template.bind({});
AllTriangle.args = {
  squares: Array(9).fill(SquareTriangle),
};

export const AllHan = Template.bind({});
AllHan.args = {
  squares: Array(9).fill(SquareHan),
};

export const AllCho = Template.bind({});
AllCho.args = {
  squares: Array(9).fill(SquareCho),
};

export const RandomWithCircleAndCross = Template.bind({});
RandomWithCircleAndCross.args = {
  squares: [
    SquareCross, 
    SquareCircle, 
    SquareCross, 
    SquareCircle, 
    SquareCross, 
    SquareCircle, 
    SquareCross, 
    SquareDefault, 
    SquareCircle 
  ],
};

export const RandomWithHanAndCho = Template.bind({});
RandomWithHanAndCho.args = {
  squares: [
    SquareHan, 
    SquareCho, 
    SquareHan, 
    SquareCho, 
    SquareHan, 
    SquareCho, 
    SquareHan, 
    SquareDefault, 
    SquareCho 
  ],
};