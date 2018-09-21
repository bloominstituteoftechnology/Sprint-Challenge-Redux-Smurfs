import React from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

function Smurf(props) {
  return <div className="smurf-card" key={props.smurf.name}>
      <h3>Name: {props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <div onClick={() => props.deleteSmurf(props.id)} >X</div>
    </div>;
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurf);
