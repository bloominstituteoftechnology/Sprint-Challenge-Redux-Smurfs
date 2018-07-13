import React from 'react';
import connect from 'react-redux';
import Smurf from './Smurf';

const smurfs = props => {
  return (
    <div>
      {this.props.smurf.map(smurf => {
        return (
          <div><Smurf smurf={smurf}/></div>
        )
      })}
    </div>
  )
}

export default smurfs;
