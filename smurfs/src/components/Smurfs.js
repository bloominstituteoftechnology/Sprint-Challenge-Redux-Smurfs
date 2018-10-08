import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";
import "./App.css";

function Smurfs(props) {
  return (
    <div className="smurfs-list">
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} id={smurf.id} key={smurf.name} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);
