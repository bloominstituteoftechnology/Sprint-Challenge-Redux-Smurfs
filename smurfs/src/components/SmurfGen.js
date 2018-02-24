import React from "react";

const SmurfGen = props => {
  return props.smurfs.map((smurf, i) => {
    return (
      <div className="smurf" key={i}>
        <button className='x'>X</button>
        <li className="stats">{`Name: ${smurf.name}`}</li>
        <li className="stats">{`Age: ${smurf.age}`}</li>
        <li className="stats">{`Height: ${smurf.height}`}</li>
      </div>
    );
  });
};

export default SmurfGen;
