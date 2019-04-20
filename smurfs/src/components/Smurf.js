import React from 'react';

const Smurf = props => {
  return(
    <div>
      <h5>{props.smurf.name} Smurf</h5>
      <p>Age: {props.smurf.age} years old</p>
      <p>Height: {props.smurf.height} cm tall</p>
    </div>)
};

export default Smurf;
