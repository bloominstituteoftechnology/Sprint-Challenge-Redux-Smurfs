import React from 'react';
import { connect } from 'react-redux';
import { toggleShowUpdate } from '../actions';
import UpdateSmurfForm from './UpdateSmurfForm'

export default function SelectedSmurf(props) {
  return (
    <div>
      <h3>{props.selected.name}</h3>
      <span onClick={() => props.handleShowSmurf({})}> X </span>
      <p>{props.selected.height} tall</p>
      <p>{props.selected.age} Smurf years old</p>
      <button onClick={() => props.toggleShowUpdate()}>Update Smurf</button> }
    </div>
  );
}