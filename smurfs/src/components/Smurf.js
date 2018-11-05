import React from "react";

const Smurf = props => (
  
  <div className="smurf">
    <h2>{props.smurf.name}</h2>
    <p>{props.smurf.age} smurf years</p>
    <p>{props.smurf.height}</p>
  </div>
);

export default Smurf;