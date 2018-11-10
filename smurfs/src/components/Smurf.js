import React from 'react';
import PropTypes from 'prop-types';

const Smurf = props => {
  const { name, age, height } = props.smurf;
  return (
    <div className="smurf">
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{height}</h2>
    </div>
  );
};

Smurf.propTypes = {
  smurf: PropTypes.object.isRequired,
};

export default Smurf;
