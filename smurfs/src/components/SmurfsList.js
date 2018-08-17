import React from "react";
import SmurfCard from "./SmurfCard";
import EditSmurfForm from "./EditSmurfForm";

export default function SmurfsList(props) {
  return (
    <div>
    {props.smurfs.map(smurf => {
        return(
        <div key={smurf.id}>

          <h3>{smurf.name}</h3>
          <button onClick={() => props.toggleSmurf(smurf.id)}>See Info</button>
          <button onClick={() => props.delete(smurf.id)}>x</button>

          <div className = "closed"
                style={ smurf.toggled ? { display: "block" } : null } >
          <SmurfCard smurf={smurf} />
          <EditSmurfForm smurf={smurf} />
          </div>

        </div> 
        );
    })}
    </div>
  );
}
