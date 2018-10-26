import React, { Component } from "react";
import { connect } from "react-redux";
import Smurfs from "../components/smurfs";
import { getSmurfs } from "../actions";
import AddSmurfForm from "./AddSmurfForm";

class SmurfView extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    console.log(this.props.smurfs.smurfs);
    return (
      <div>
        <AddSmurfForm />
        <Smurfs smurfs={this.props.smurfs.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetching }) => {
  return {
    smurfs,
    fetching
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfView);
