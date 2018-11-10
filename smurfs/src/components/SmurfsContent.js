import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import SmurfsList from './SmurfsList';

class SmurfsContent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call action here
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetching) {
      <h2>Smurfs are loading...</h2>
    }
    return (
      <div>
        <SmurfsList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfsContent);
