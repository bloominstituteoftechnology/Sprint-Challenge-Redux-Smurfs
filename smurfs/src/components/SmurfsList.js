import React from "react";

const SmurfsList = props => {
  return props.smurfs.map(smurf => {
    return (
      <div key={smurf.name}>
        <div>
          <h3>{smurf.name}</h3>
          <p>{smurf.age} years old.</p>
          <p>{smurf.height} tall.</p>
        </div>
      </div>
    );
  });
};

export default SmurfsList;
