import React from "react";
import { connect } from "react-redux";

function ErrorDisplay(props) {
  return props.error ? <h3>{props.error}</h3> : null;
}

const mapStateToProps = state => ({
  error: state.smurfettes.error 
});

export default connect(mapStateToProps)(ErrorDisplay);