import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.height} tall</p>
      <p>{props.age} years old</p>
    </div>
  );
};

export default Smurf;
