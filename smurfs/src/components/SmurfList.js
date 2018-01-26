import React from "react";

const SmurfList = props => {
  return (
    <div>
      <h1>THIS IS THE SMURF KINGDOM</h1>
      <ul>
        {console.log("THIS IS PROPS", props)}
        {this.props.smurfs.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  );
};

export default SmurfList;