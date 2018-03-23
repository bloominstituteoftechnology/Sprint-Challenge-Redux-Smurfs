import React, { Component } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

function mapStateToProps(state) {
  return { smurfs: state.smurfs };
}

class SmurfList extends Component {
  render() {
    return <div>{this.props.smurfs.map(smurf => <Smurf smurf={smurf} />)}</div>;
  }
}

export default connect(mapStateToProps)(SmurfList);
