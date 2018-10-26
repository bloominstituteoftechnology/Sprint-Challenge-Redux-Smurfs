import React from "react";
import Smurf from "./Smurf";

const SmurfList = ({ smurfs }) => (
  <div className="smurf-list">
    {smurfs.map(smurf => (
      <Smurf smurf={smurf} />
    ))}
  </div>
);

export default SmurfList;
