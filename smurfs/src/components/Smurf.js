import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.age} years old</p>
      <p>{props.height} cm tall</p>
    </div>
  );
}

export default Smurf;