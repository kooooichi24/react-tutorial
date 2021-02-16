import React from 'react';

import { Game } from '../components/Game/Game';

export default {
  title: 'Game',
  component: Game,
};

const Template = (args) => <Game {...args} />;

export const ReadyStart = Template.bind({});
ReadyStart.args = {
  history: [{squares: Array(9).fill(null)}],
  xIsNext: true,
  stepNumber: 0,
};

export const FirstStep = Template.bind({});
FirstStep.args = {
  history: [{squares: ['X', null, null, null, null, null, null, null, null ]}],
  xIsNext: false,
  stepNumber: 1,
};