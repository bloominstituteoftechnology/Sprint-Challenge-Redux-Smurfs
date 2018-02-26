import React from "react";

const SmurfGen = props => {
  return props.smurfs.map((smurf, i) => {
    return (
      <div className="smurf" key={smurf.id}>
        <button className="x" onClick={() => props.delete(smurf.id)}>
          X
        </button>
        <li icon="clickable" className="stats">{`Name: ${smurf.name}`}</li>
        <li className="stats">{`Age: ${smurf.age}`}</li>
        <li className="stats">{`Height: ${smurf.height}`}</li>
        <button>Update</button>
      </div>
    );
  });
};

export default SmurfGen;
