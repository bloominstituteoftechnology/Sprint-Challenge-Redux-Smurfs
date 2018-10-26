import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

const SmurfCard = props => {
  console.log(props.smurf.id);
  return (
    <div>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={e => props.deleteSmurf(e, props.smurf.id)}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(SmurfCard);
