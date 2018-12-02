import React from "react";

const Smurfs = props => {
  return (
    <div classname="Smurf">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p> Height: {props.height}</p>
    </div>
  );
};

export default Smurfs;
