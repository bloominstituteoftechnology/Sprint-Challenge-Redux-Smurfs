import React, { Component } from 'react';
import { connect } from 'react-redux'

import Smurf from './smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
          {this.props.fecthing ? <h1>FETHCING</h1> : null}

          {this.props.creating ? <h1>CREATING</h1> : null}

          {this.props.error !== null ? <h1>{this.props.error}</h1> : null}
        <ul>
          {this.props.smurfs.map( smurf => <Smurf smurf={smurf} key={smurf.id}/>)}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

const mapStatetoProps = state => {
  return {
    smurfs: state.smurfs,
    fecthing: state.fetchingSmurfs,
    creating: state.addingSmurf,
    error: state.error
  }
}
export default connect(mapStatetoProps)(Smurfs)
