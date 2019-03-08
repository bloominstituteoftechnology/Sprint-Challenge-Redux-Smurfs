/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Smurf = (props) => {
  const { name, height, age } = props;
  return (
    <div className="smurf">
      <div className="smurf-name">
        <h3>{name}</h3>
      </div>
      <div className="smurf-details">
        <p><span>Height:</span>{height} tall</p>
        <p><span>Age:</span>{age} smurf years old</p>
      </div>
      <button type="button">Ban from Village</button>
    </div>
  );
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Smurf;
