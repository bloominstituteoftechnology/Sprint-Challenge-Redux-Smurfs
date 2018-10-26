import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

class Smurfs extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div>
        <h1>Hello from smrufs.js</h1>
        <Smurf smurfs={this.props.smurfs} />
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(Smurfs);
