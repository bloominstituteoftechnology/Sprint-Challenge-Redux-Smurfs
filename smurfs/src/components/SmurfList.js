import React from 'react';

export const SmurfList = props => {
  return (
    <div>
      <h1>Smurfs!</h1>
      {props.smurfs.map(smurf => {
        return (
          <ul key={smurf.id}>
            <li style={{ listStyle: 'none' }}>Name: {smurf.name}</li>
            <li style={{ listStyle: 'none' }}>Age: {smurf.age} years</li>
            <li style={{ listStyle: 'none' }}>Height: {smurf.height} cm</li>
          </ul>
        );
      })}
    </div>
  );
};