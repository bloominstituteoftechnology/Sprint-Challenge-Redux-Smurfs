import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h1>Name: {props.smurf.name}</h1>
      <ul>
        <li>Age: {props.smurf.age}</li>
        <li>Height: {props.smurf.height} cm</li>
      </ul>
    </div>
  );
};

export default Smurf;
