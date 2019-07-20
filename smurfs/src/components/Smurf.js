import React from "react";

const Smurf = props => {
  return <li>Name: {props.smurf.name} - Age: {props.smurf.age} - height: {props.smurf.height} </li>;
};

export default Smurf;
