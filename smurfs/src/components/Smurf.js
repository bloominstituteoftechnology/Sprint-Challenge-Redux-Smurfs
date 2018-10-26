import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}> Delete this Smurf</button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
