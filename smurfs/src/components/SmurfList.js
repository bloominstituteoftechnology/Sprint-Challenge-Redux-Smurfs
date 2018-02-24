import React from 'react';
import { connect } from 'react-redux';

import { removeSmurf } from '../actions';

const SmurfList = props => {
  return (
    <div>
      <h1>Smurfs!</h1>
      {props.smurfs.map(smurf => {
        return (
          <ul key={smurf.id}>
            <li style={{ listStyle: 'none' }}>Name: {smurf.name}</li>
            <li style={{ listStyle: 'none' }}>Age: {smurf.age} years</li>
            <li style={{ listStyle: 'none' }}>Height: {smurf.height} cm</li>
            <button onClick={() => props.removeSmurf(smurf.id)}>X</button>
          </ul>
        );
      })}
    </div>
  );
};

export default connect(null, { removeSmurf })(SmurfList);