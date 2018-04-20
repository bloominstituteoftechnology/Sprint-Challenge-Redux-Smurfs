import React from "react";

const Smurf = props => {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <h5>{props.smurf.age}</h5>
      <h5>{props.smurf.height}</h5>
    </div>
  );
};

export default Smurf;
