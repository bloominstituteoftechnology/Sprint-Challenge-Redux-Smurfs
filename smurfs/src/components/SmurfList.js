import React from "react";

function SmurfList(props) {
  return (
    <div>
      {props.smurfs.map(smurf => (
        <div key={smurf.name}>
          Name: {smurf.name} <br />
          Age: {smurf.age} <br />
          Height: {smurf.height} <br />
          ID: {smurf.id}<br /><br />
        </div>
      ))}
    </div>
  );
}

export default SmurfList;
