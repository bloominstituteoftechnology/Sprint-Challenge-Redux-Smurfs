import React from 'react';
import { connect } from "react-redux";

import { SmurfList } from '../components';
import { fetchingSmurfs } from "../actions";

class SmurfListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    debugger;
    this.props.fetchingSmurfs();
  }

  render() {
    if (this.props.fetching) {
      <h2>Fetching only smurfy smurfs...</h2>;
    }
    return (
      <div className="SmurfList_wrapper">
        <button onClick={this.props.fetchingSmurfs}>Get More!</button>
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
    fetching: state.smurfettes.fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchingSmurfs }
)(SmurfListView);