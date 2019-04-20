import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Height: {props.height} tall</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Smurf;
