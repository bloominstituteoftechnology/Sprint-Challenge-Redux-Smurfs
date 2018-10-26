import React from "react";

const Smurf = props => {
  console.log(props);
  return (
    <div>
      {props.smurfs.map((smurf, index) => (
        <div key={index}>
          <h1>{smurf.name}</h1>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))}
    </div>
  );
};

export default Smurf;
