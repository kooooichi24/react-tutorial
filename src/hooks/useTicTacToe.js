import { useState } from 'react';

export const useTicTacToe = (width, height) => {
  const [history, setHistory] = useState([{squares: Array(width * height).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const CROSS = 'X';
  const CIRCLE = 'O';

  const status = winner 
    ? 'Winner: ' + winner
    : current.squares.every(c => c !== null)
    ? 'Draw'
    : 'Next player: ' + (xIsNext ? CROSS : CIRCLE);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? CROSS : CIRCLE;

    setHistory(newHistory.concat([{squares: squares}]))
    setXIsNext(!xIsNext);
    setStepNumber(newHistory.length);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  return {
    history,
    current,
    status,
    handleClick,
    jumpTo,
  }
}

const calculateWinner= (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}