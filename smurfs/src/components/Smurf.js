import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf, deleteSmurf } from '../actions';

const Smurf = props => {
  return (
    <li className="smurf">
      <span className="smurf__name">{props.smurf.name}</span>
      <span className="smurf__age">{props.smurf.age}</span>
      <span className="smurf__height">{props.smurf.height}</span>
      <button onClick={() => {props.updateSmurf(props.smurf)}}>Update</button>
      <button onClick={() => {props.deleteSmurf(props.smurf.id)}}>Delete</button>
    </li>
  );
}

export default connect(null, { updateSmurf, deleteSmurf })(Smurf);