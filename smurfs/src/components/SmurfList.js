import React from "react";

const SmurfList = props => {
  return (
    <div>
      <h1>THIS IS THE SMURF KINGDOM</h1>
      <ul>
        {console.log("THIS IS PROPS", props)}
        {props.smurfs.map((item, i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
    </div>
  );
};

export default SmurfList;