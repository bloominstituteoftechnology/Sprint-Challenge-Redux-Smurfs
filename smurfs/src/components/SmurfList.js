import React from "react";
import smurf from "./Smurf";

 const smurfList = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return <smurf key={smurf.name} smurf={smurf} />;
      })}
    </ul>
  );
};
 export default smurfList;