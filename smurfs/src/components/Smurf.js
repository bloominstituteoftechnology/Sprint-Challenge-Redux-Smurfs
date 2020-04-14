import React from 'react';

const Smurf = props => {
  return (
    <div>
      <strong>{props.smurf.name} Smurf</strong>
      <div><em>{props.smurf.age} years old</em></div>
      <div>{props.smurf.height}</div>
    </div>
    )
}

export default Smurf;