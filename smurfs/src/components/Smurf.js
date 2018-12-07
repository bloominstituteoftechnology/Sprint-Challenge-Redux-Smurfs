import React from "react";
import { Fragment } from "react";

const Smurf = props => {
  return (
    <Fragment>
      <h2>{props.smurf.name}</h2>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </Fragment>
  );
};

export default Smurf;
