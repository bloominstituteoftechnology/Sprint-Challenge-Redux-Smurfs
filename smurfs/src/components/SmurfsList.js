import React, { Fragment } from "react";
import Smurf from "./Smurf";

const FriendsList = props => (
  <div>
    {props.smurfs.map((smurf, index) => (
      <Fragment>
        <Smurf key={index} smurf={smurf} />
        <button onClick={() => props.handleDelete(smurf.id)}>{`delete ${smurf.name}?`}</button>
      </Fragment>
    ))}
  </div>
);

export default FriendsList;
