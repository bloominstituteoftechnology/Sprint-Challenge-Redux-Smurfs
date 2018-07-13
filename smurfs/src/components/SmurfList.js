import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { getSmurfs } from '../reducers/index.js';
import Smurf from './Smurf';

class SmurfList extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    const smurfs = this.props.smurfs.map( smurf => <Smurf key={smurf.id} {...smurf} />);
    return (
        <ul>
          {smurfs}
        </ul>
    )
  }
}

const mapStateToProps = (state) => (
  {smurfs: getSmurfs(state)}
)

export default connect(mapStateToProps, actions)(SmurfList);
