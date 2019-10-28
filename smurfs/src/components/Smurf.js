import React from 'react';

const Smurf = props => {
  return <li>{props.smurf.name} {props.smurf.age} {props.smurf.height}</li>;
};

export default Smurf;