import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

function Smurf(props) {
  return (
    <div className="smurf-card" key={props.smurf.name}>
      {props.smurf.name}
      {props.smurf.age}
      {props.smurf.height}
      <div>X</div>
    </div>
  );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurf);
