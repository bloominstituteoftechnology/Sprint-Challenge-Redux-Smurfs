import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

const SmurfList = props => {
  return (
    <div>
      {props.fetching ? (
        <h2>Getting the Smurfs ready now!</h2>
      ) : (
        props.smurfs.map(item => <Smurf smurf={item} key={item.id} />)
      )}
      <h2>{props.error}</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(SmurfList);
