import React from 'react';

export const Smurfs = (props) => {
  console.log(props);
  return (
    <ul style={ {listStyle: 'none', padding: 0} }>
      <li>Name: {props.name}</li>
      <li>Age: {props.age}</li>
      <li>Height: {props.height}</li>
    </ul>
  );
}
