import React from "react";

import Smurf from "./Smurf";

const SmurfList = props => (
  <div className="smurfs">
    {props.smurfs.map(smurf => (
      <Smurf
        smurf={smurf}
        key={smurf.id}
        deleteSmurf={props.deleteSmurf}
        toggleEditing={props.toggleEditing}
      />
    ))}
  </div>
);

export default SmurfList;
