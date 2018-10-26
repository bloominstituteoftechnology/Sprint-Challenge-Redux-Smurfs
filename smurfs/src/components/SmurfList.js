import React from 'react';

import Smurf from "./Smurf";

const SmurfList = props => {
  console.log(props)
  return (
    <ul>
      {props.smurfettes.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </ul>
  );
};

export default SmurfList;