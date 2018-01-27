import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';

import './SmurfList.css';

class SmurfsList extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return(
      <ul>
        {this.props.smurfs.map(smurf => {
          return (
            <li key= {smurf.id}>
              <div>Name: {smurf.name}</div>
              <div>Age: {smurf.age}</div>
              <div>Height: {smurf.height}</div>
              <button onClick={() => this.props.deleteSmurf(smurf.id)}>Delete me</button>
            </li>
          )
        })}
      </ul>
    )
  }
}
SmurfsList.defaultProps = {  // needed to deal with null problem, but there must be a better way...
  smurfs: [],
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(SmurfsList);