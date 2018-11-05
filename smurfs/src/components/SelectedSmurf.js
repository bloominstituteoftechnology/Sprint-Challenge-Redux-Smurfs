import React from 'react';
import { connect } from 'react-redux';
import { toggleShowUpdate } from '../actions';
import UpdateSmurfForm from './UpdateSmurfForm'
import './SelectedSmurf.css'

export default function SelectedSmurf(props) {
  return (
    <div className="selectedSmurf">
      <h3>{props.selected.name}</h3>
      <span onClick={() => props.handleShowSmurf({})}> X </span>
      <p>{props.selected.height} tall</p>
      <p>{props.selected.age} Smurf years old</p>
    </div>
  );
}