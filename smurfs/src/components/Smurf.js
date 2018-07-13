import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index';

const Smurf = (props) => {
  const { id } = props;
  const deleteSmurf = () => props.deleteSmurf(id);

  return (
    <li>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.height}</div>
      <button onClick={deleteSmurf}>Delete</button>
    </li>
  )
}

export default connect(null, { deleteSmurf })(Smurf);