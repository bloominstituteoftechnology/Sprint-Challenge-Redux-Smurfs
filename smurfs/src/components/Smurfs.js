import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Smurf from './Smurf';


const Smurfs = (props) => {
  const { smurfs, deleteSmurf } = props;
  return (
    <div className="smurfs-container">
      <h2>Smurf Village</h2>
      <div className="smurf-list">
        {smurfs.map(smurf => (
          <Smurf
            name={smurf.name}
            age={smurf.age}
            id={smurf.id}
            key={`${smurf.id}-${smurf.age}`}
            height={smurf.height}
            deleteSmurf={deleteSmurf}
          />
        ))}
      </div>
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
  deleteSmurf: PropTypes.func.isRequired,
};

export default Smurfs;
