import React from "react";
import SmurfCard from "./SmurfCard";
import EditSmurfForm from "./EditSmurfForm";

export default function SmurfsList(props) {
  return (
    <div>
    {props.smurfs.map(smurf => {
        return(
        <div key={smurf.id}>
        <SmurfCard smurf={smurf} />
        <EditSmurfForm smurf={smurf} />
        <button onClick={() => props.delete(smurf.id)}>Delete Smurf</button>
        </div>);
    })}
    </div>
  );
}
