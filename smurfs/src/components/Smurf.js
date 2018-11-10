import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteSmurf } from '../actions';

const Smurf = props => {
  const handleClick = () => {
    props.deleteSmurf(props.smurf);
  };

  const { id, name, age, height } = props.smurf;
  return (
    <div className="smurf">
      <div
        style={{ color: 'red', cursor: 'pointer', fontWeight: 'bold' }}
        onClick={handleClick}
      >
        X
      </div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{height}</h2>
      <Link to={`/update/${id}`}>Update Smurf</Link>
    </div>
  );
};

Smurf.propTypes = {
  smurf: PropTypes.object.isRequired,
  deleteSmurf: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
