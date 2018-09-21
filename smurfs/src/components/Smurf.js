import React from "react";


function Smurf(props) {
  return <div className="smurf-card" key={props.smurf.name}>
      <h3>Name: {props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <div className="delete-button" onClick={() => props.deleteSmurf(props.id)} >Banish Smurf</div>
    </div>;
}


export default Smurf;