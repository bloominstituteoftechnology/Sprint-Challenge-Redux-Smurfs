import React from "react";

const Smurf = props => {
  console.log(props);
  return (
    <div className="smurfs">
      {props.smurfs.map((smurf, index) => (
        <div key={index} className="smurf-container">
          <h1>{smurf.name}</h1>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))}
    </div>
  );
};

export default Smurf;
