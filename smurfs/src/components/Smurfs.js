import React, { Component } from "react";

import Smurf from "./Smurf";

const Smurfs = props => {
  return (
    <div className="smurfs-list">
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            key={smurf.name}
            smurf={smurf}
            deleteSmurf={props.deleteSmurf}
          />
        );
      })}
    </div>
  );
};

export default Smurfs;
