import React from "react";
import Smurf from "./Smurf";

function Smurfs(props) {
  return (
    <div className="smurfs-list-wrapper">
      {props.smurfs.map(smurf => (
        <Smurf 
          smurf={smurf}
          id={smurf.id}
          key={smurf.name}
          deleteSmurf={props.deleteSmurf} />
      ))}
    </div>
  );
}


export default Smurfs;