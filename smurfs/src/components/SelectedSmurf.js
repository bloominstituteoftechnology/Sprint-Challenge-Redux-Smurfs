import React from 'react';
import { connect } from 'react-redux';
import { toggleShowUpdate } from '../actions';
import UpdateSmurfForm from './UpdateSmurfForm'
import './SelectedSmurf.css'

export default function SelectedSmurf(props) {
  return (
    <div className="selectedSmurf">
      <div 
        className='avatarBox'
        onClick={() => props.handleShowSmurf({})}>
           <img src='http://icons.iconarchive.com/icons/iconshock/smurf/256/smurf-icon.png' />
           <p className='avatar'>Click me to close!</p> 
      </div> 
      <div>
        <p>Name: {props.selected.name}</p>
        <p>Height: {props.selected.height} tall</p>
        <p>Age: {props.selected.age} Smurf years old</p>
      </div>
    </div>
  );
}