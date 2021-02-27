import React from 'react';
import PropTypes from 'prop-types';

import { Square } from '../Square/Square';
import './Board.css';

export const Board = ({ width, height, squares, onClick }) => {
  return (
    <div>
      {Array.from(Array(height), (_, i) => {
        return (
          <div key={i} className="board-row">
            {Array.from(Array(width), (_, j) => {
              const n = i * width + j;
              return (
                <Square
                  key={n}
                  value={squares[n]}
                  onClick={() => onClick(n)}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func,
}