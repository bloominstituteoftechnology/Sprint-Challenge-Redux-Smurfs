import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import "./App.css";

function Smurf(props) {
  return (
    <div className="card" key={props.smurf.id}>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
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
