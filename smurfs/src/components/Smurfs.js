import React from "react";
import Smurf from "./Smurf";

const Smurfs = props => {
  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  );
};

export default Smurfs;
