import React from 'react';
import connect from 'react-redux';
import Smurf from './Smurf';
import fetchSmurfs from '../actions';

const Smurfs = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return (
          <div>
          <Smurf smurf={smurf}/>
          </div>
        )
      })}
    </div>
  )
}

export default Smurfs;
