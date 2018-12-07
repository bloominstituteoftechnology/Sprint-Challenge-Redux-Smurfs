import React from "react";

function Smurf(props) {
  return (
    <div>
        <br/><br/>
          Name: {props.smurf.name} <br />
          Age: {props.smurf.age} <br />
          Height: {props.smurf.height} <br />
          ID: {props.smurf.id}<br />
          <button onClick={props.deleteSmurf}>Azrael is hungry!</button>
          <br/><br/>
    </div>
  );
}

export default Smurf;