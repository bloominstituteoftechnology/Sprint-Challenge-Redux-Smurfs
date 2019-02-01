import React, { Component } from "react";
import { connect } from "react-redux";
import Smurfs from "../components/smurfs";
import { getSmurfs } from "../actions";
import AddSmurfForm from "./AddSmurfForm";
import ReactLoading from "react-loading";

class SmurfView extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    if (this.props.fetching) {
      return (
        <div>
          <ReactLoading type={"spin"} color={"#dddddd"} />
        </div>
      );
    }
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
