import React from 'react';

const Smurf = props => {
  return (
    <li className="Smurf">
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
    </li>
  );
};
export default Smurf;
