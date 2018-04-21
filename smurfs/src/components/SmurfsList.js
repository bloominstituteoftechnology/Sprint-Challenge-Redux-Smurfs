import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";

class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div>
        {this.props.fetchingSmurfs ? (
          <h3>Hold tight, we're fetching smurfs</h3>
        ) : null}
        {this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
