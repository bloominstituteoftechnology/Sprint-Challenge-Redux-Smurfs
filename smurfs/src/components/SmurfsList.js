import React from "react";
import Smurf from "./Smurf";

const FriendsList = props => (
  <div>
    {props.smurfs.map((smurf, index) => (
      <div key={index} >
        <Smurf smurf={smurf} />
        <button onClick={() => props.handleDelete(smurf.id)}>{`delete ${smurf.name}?`}</button>
      </div>
    ))}
  </div>
);

export default FriendsList;
