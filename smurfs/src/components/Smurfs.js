import React from 'react';

export const Smurfs = (props) => {
  console.log(props);
  return (
    <ul style={ {listStyle: 'none', padding: 0} }>
      <li>Name: {props.smurf.name}</li>
      <li>Age: {props.smurf.age}</li>
      <li>Height: {props.smurf.height}</li>
    </ul>
  );
}
