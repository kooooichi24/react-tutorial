import React from 'react';
import PropTypes from 'prop-types';

import { Board } from '../Board/Board';
import { calculateWinner } from '../../hooks/useTicTacToe';
import './Game.css';

export const Game = ({ width, height, history, handleClick, jumpTo, xIsNext, current }) => {
  const winner = calculateWinner(current.squares);

  const changeStatus = (winner) => {
    if (winner) {
      return 'Winner: ' + winner;
    } else if (current.squares.every(c => c !== null)) {
      return 'Draw';
    } else {
      return 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  }
  const status = changeStatus(winner);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board width={width} height={height} squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

Game.prototype = {
  history: PropTypes.array,
  current: PropTypes.array,
  status: PropTypes.string,
  handleClick: PropTypes.func,
  jumpTo: PropTypes.func,
}