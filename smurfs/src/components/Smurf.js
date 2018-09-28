import React from "react";

function Smurf(props) {
  console.log('SMURFS', props.smurf.name);
  return (
    <div className="smurf-card" key={props.smurf.name}>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <div className="delete-btn" onClick={() => props.deleteSmurf(props.id)}>Exile Smurf</div>
    </div>
  );
}

export default Smurf;
