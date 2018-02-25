import React from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

const Smurfs = props => {
  return (
    <ul style={ {listStyle: 'none', padding: 0} }>
      <li>Name: {props.smurf.name}</li>
      <li>Age: {props.smurf.age}</li>
      <li>Height: {props.smurf.height}</li>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
    </ul>
  );
}

export default connect(null, { deleteSmurf })(Smurfs); 
