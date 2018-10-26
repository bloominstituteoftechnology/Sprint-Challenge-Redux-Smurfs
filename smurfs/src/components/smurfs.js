import React from "react";
import SmurfCard from "./SmurfCard";

const Smurfs = props => {
  console.log(props.smurfs);
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <SmurfCard key={smurf.name} smurf={smurf} />;
      })}
    </div>
  );
};

export default Smurfs;
