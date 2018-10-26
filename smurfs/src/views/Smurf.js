import React from 'react';

import './ViewStyle.css';

function Smurf(props) {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age} years old</p>
      <p>{props.smurf.height}</p>
    </div>
  );
}

export default Smurf;
