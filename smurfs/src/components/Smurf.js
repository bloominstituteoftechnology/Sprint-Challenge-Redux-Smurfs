import React from "react";

function Smurf(props) {
  return (
    <div className="smurf-card" key={props.smurf.name}>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <div onClick={() => props.deleteSmurf(props.id)}>Exile Smurf</div>
    </div>
  );
}

export default Smurf;
