import React from "react";
import SmurfCard from "./SmurfCard";
function Smurfs(props) {
  return (
    <div>
      {props.smurfs.map(smurf => (
        <SmurfCard
          key={smurf.id}
          age={smurf.age}
          height={smurf.height}
          name={smurf.name}
        />
      ))}
    </div>
  );
}

export default Smurfs;
