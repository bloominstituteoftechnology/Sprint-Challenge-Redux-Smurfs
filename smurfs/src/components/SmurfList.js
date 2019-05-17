import React from "react";


import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </ul>
  );
};

export default SmurfList;
