import { useState } from 'react';

export const useTicTacToe = (width, height) => {
  const [history, setHistory] = useState([{squares: Array(width * height).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

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
    xIsNext,
    handleClick,
    jumpTo,
  }
}

const calculateWinner= (squares) => {
  const winPatternList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winPattern = winPatternList.find(
    ([first, second, third]) => 
      squares[first] &&
      squares[first] === squares[second] &&
      squares[first] === squares[third]
  );

  if (!winPattern) return null;

  return squares[winPattern[0]];
}