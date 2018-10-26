import React from 'react';
import { connect } from "react-redux";

import { SmurfList } from '../components';
import { getSmurfs } from "../actions";

class SmurfListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // debugger;
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      <h2>Fetching only smurfy smurfs...</h2>;
    }
    return (
      <div className="SmurfList_wrapper">
        <button onClick={this.props.getSmurfs}>Get More!</button>
        <SmurfList smurfs={this.props.smurfs} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfettes.smurfs,
    error: state.smurfettes.error,
    fetching: state.smurfettes.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfListView);