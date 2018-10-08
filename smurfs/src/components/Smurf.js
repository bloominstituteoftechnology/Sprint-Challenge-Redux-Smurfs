import React from "react";
import "./App.css";

function Smurf(props) {
  return (
    <div className="card" key={props.smurf.id}>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  );
}

export default Smurf;
