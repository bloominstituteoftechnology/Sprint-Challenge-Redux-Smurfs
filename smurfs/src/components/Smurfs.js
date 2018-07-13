import React from 'react';
import connect from 'react-redux';
import Smurf from './Smurf';
import fetchSmurfs from '../actions';

class Smurfs = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return (
          <div>
          <h1>{smurf.name}</h1>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Smurfs;
