import React from 'react';

import { Game } from './Game';

export default {
  title: 'Game',
  component: Game,
};

const Template = (args) => <Game {...args} />;

const handleClick = () => console.log('clicked handleClick');
const jumpTo = () => console.log('clicked jumpTo');

const baseArgs = {
  history: [{squares: Array(9).fill(null)}],
  current: {squares: Array(9).fill(null)},
  status: 'Next player: X',
  handleClick: handleClick,
  jumpTo: jumpTo,
}

export const Default = Template.bind({});
Default.args = {
  ...baseArgs
};

export const FirstStep = Template.bind({});
FirstStep.args = {
  ...baseArgs,
  history: [
    {squares: [null, null, null, null, null, null, null, null, null ]},
    {squares: ['X', null, null, null, null, null, null, null, null ]},
  ],
  current: {squares: ['X', null, null, null, null, null, null, null, null ]},
  status: 'Next player: O',
}

export const Random = Template.bind({});
Random.args = {
  ...baseArgs,
  history: [
    {squares: [null, null, null, null, null, null, null, null, null ]},
    {squares: ['X', null, null, null, null, null, null, null, null ]},
    {squares: ['X', 'O', null, null, null, null, null, null, null ]},
    {squares: ['X', 'O', 'X', null, null, null, null, null, null ]},
    {squares: ['X', 'O', 'X', 'O', null, null, null, null, null ]},
    {squares: ['X', 'O', 'X', 'O', 'X', null, null, null, null ]},
    {squares: ['X', 'O', 'X', 'O', 'X', 'O', null, null, null ]},
    {squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, null ]},
    {squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, 'O' ]}
  ],
  current: {squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, 'O' ]},
  status: 'Next player: X',
}

export const AllTriangle = Template.bind({});
AllTriangle.args = {
  ...baseArgs,
  history: [{squares: ['△', '△', '△', '△', '△', '△', '△', '△', '△' ]}],
  current: {squares: ['△', '△', '△', '△', '△', '△', '△', '△', '△' ]},
}