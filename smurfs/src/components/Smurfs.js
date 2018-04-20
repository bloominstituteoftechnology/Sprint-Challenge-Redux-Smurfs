import React from "react";


const Smurfs = props => {
  return (
    <div>
      {props.smurfList.map(smurf => {
        return [
          <div key={smurf.id}>
                <h3> {`Name: ${smurf.name}`} </h3>
                <div> {`Age: ${smurf.age}`} </div>
                <div> {`Height: ${smurf.height}`} </div>
          </div>
        ];
      })}
    </div>
  );
};

export default Smurfs;
