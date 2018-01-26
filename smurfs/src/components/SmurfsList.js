import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class SmurfsList extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return(
      <div>
        <h1>{this.props.smurfs[0].name}</h1>
      </div>
    )
  }
}

export default connect(null, {getSmurfs})(SmurfsList);