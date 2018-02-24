import React from 'react';

export const SmurfList = props => {
  return (
    <div>
      SmurfList
      {props.smurfs.map(smurf => {
        return (
          <ul key={smurf.id}>
            <li>Name: {smurf.name}</li>
            <li>Age: {smurf.age}</li>
            <li>Height: {smurf.height}</li>
          </ul>
        );
      })}
    </div>
  );
};