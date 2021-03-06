import React from 'react';

import { Game } from './Game';
import * as BoardStories from '../Board/Board.stories';
import * as SquareStories from '../Square/Square.stories';

export default {
  title: 'Game',
  component: Game,
  args: {
    width: 3,
    height: 3,
  },
};

const Template = (args) => <Game {...args} />;

const handleClick = () => console.log('clicked handleClick');
const jumpTo = () => console.log('clicked jumpTo');

const SquareDefault = SquareStories.Default.args.value;
const SquareCircle = SquareStories.Circle.args.value;
const SquareCross = SquareStories.Cross.args.value;
const SquareTriangle = SquareStories.Triangle.args.value;

const BoardDefault = BoardStories.Default.args.squares;
const BoardAllHan = BoardStories.AllHan.args.squares;
const BoardAllCho = BoardStories.AllCho.args.squares;

const baseArgs = {
  history: [{squares: BoardDefault}],
  current: {squares: BoardDefault},
  status: 'Next player: X',
  handleClick: handleClick,
  jumpTo: jumpTo,
}

export const Default = Template.bind({});
Default.args = {
  ...baseArgs
};

export const FirstStep = Template.bind({});
const FirstStepCurrent = {
  squares: [
    SquareCross,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault 
  ]
};
FirstStep.args = {
  ...baseArgs,
  history: Default.args.history.concat(FirstStepCurrent),
  current: FirstStepCurrent,
  status: 'Next player: O',
}

export const SecondStep = Template.bind({});
const SecondStepCurrent = {
  squares: [
    SquareCross,
    SquareCircle,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault 
  ]
};
SecondStep.args = {
  ...baseArgs,
  history: FirstStep.args.history.concat(SecondStepCurrent),
  current: SecondStepCurrent,
  status: 'Next player: X',
}

export const ThirdStep = Template.bind({});
const ThirdStepCurrent = {
  squares: [
    SquareCross,
    SquareCircle,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault,
    SquareDefault 
  ]
};
ThirdStep.args = {
  ...baseArgs,
  history: SecondStep.args.history.concat(ThirdStepCurrent),
  current: ThirdStepCurrent,
  status: 'Next player: O',
}


export const Random = Template.bind({});
Random.args = {
  ...baseArgs,
  history: [
    {squares: BoardDefault},
    {squares: [SquareCross, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault ]},
    {squares: [SquareCross, SquareCircle, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault ]},
    {squares: [SquareCross, SquareCircle, SquareCross, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault ]},
    {squares: [SquareCross, SquareCircle, SquareCross, SquareCircle, SquareDefault, SquareDefault, SquareDefault, SquareDefault, SquareDefault ]},
    {squares: [SquareCross, SquareCircle, SquareCross, SquareCircle, SquareCross, SquareDefault, SquareDefault, SquareDefault, SquareDefault ]},
    {squares: [SquareCross, SquareCircle, SquareCross, SquareCircle, SquareCross, SquareCircle, SquareDefault, SquareDefault, SquareDefault ]},
    {squares: [SquareCross, SquareCircle, SquareCross, SquareCircle, SquareCross, SquareCircle, SquareCross, SquareDefault, SquareDefault ]},
    {squares: [SquareCross, SquareCircle, SquareCross, SquareCircle, SquareCross, SquareCircle, SquareCross, SquareDefault, SquareCircle ]}
  ],
  current: {squares: [SquareCross, SquareCircle, SquareCross, SquareCircle, SquareCross, SquareCircle, SquareCross, SquareDefault, SquareCircle ]},
  status: 'Next player: X',
}

export const AllTriangle = Template.bind({});
AllTriangle.args = {
  ...baseArgs,
  history: [{squares: [SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle ]}],
  current: {squares: [SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle, SquareTriangle ]},
}

export const AllHan = Template.bind({});
AllHan.args = {
  ...baseArgs,
  current: {squares: BoardAllHan}
}

export const AllCho = Template.bind({});
AllCho.args = {
  ...baseArgs,
  current: {squares: BoardAllCho}
}