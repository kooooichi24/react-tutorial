import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

export const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick} data-e2e="squareButton">
    { value }
  </button>
)

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
}