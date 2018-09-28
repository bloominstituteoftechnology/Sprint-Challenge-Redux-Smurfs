import React from 'react';

const Smurf = props => {
  return (
    <h3>{props.name}</h3>
    <p>{props.age} years old</p>
    <p>{props.height} cm tall</p>
  );
}

export default Smurf;