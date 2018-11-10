import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Smurf = props => {
  const { id, name, age, height } = props.smurf;
  return (
    <div className="smurf">
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{height}</h2>
      <Link to={`/update/${id}`}>Update Smurf</Link>
    </div>
  );
};

Smurf.propTypes = {
  smurf: PropTypes.object.isRequired,
};

export default Smurf;
