import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index.js';

const Smurf = props => {
  return (
    <div>
      <h1>Name: {props.smurf.name}</h1>
      <ul>
        <li>Age: {props.smurf.age}</li>
        <li>Height: {props.smurf.height} cm</li>
      </ul>
      <button onClick={() => props.deleteSmurf(props.smurf.id, props.index)}> Delete Smurf </button>
    </div>
  );
};

export default connect(null, { deleteSmurf })(Smurf);
