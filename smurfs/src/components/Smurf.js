/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const handleDeleteClick = (id, deleteSmurf) => (event) => {
  event.preventDefault();
  deleteSmurf(id);
};
const Smurf = (props) => {
  const {
    name, height, age, id, deleteSmurf,
  } = props;

  return (
    <div className="smurf">
      <div className="smurf-name">
        <h3>{name}</h3>
      </div>
      <div className="smurf-details">
        <p><span>Height:</span>{height} tall</p>
        <p><span>Age:</span>{age} smurf years old</p>
      </div>
      <div className="requests">
        <button type="button" className="delete" onClick={handleDeleteClick(id, deleteSmurf)}>Ban from Village</button>
      </div>
    </div>
  );
};

Smurf.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  deleteSmurf: PropTypes.func.isRequired,
};

export default Smurf;
