import React from "react";

const Smurf = props => {
  return (
      <div>
          <h2>Hi I am {props.smurf.name}</h2>
          <h4>I am {props.smurf.age} years old.</h4>
          <h4>I am {props.smurf.height} tall.</h4>
      </div>
  );
};

export default Smurf;