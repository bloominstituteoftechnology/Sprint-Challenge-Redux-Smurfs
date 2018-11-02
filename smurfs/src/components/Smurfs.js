import React from "react";
import Smurf from "./Smurf";

function Smurfs(props) {
  if (!props.smurfs || !props.smurfs.length) {
    return <h1>>Gargamel has stolen your smurfs! :( Go fetch them!</h1>;
  }
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