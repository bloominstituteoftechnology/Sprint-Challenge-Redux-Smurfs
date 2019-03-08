/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Smurf from './Smurf';

const Smurfs = (props) => {
  const { smurfs } = props;
  return (
    <div className="smurfs-wrapper">
      <h2>Smurf Village</h2>
      {smurfs.map(smurf => (
        <Smurf
          name={smurf.name}
          age={smurf.age}
          height={smurf.height}
          id={smurf.id}
          key={`${smurf.id}-${smurf.age}`}
        />
      ))}
    </div>
  );
};

Smurfs.propTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
  })).isRequired,
};

export default Smurfs;
