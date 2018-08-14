import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions';

import Smurf from './Smurf';

class SmurfsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    };
  }
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.error ? <p>{this.props.error}</p> : null}
        <button onClick={() => this.setState({ update: !this.state.update })}>
          Update Smurfs
        </button>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <Smurf smurf={smurf} update={this.state.update} />
              <button onClick={() => this.props.deleteSmurf(smurf.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    deleteSmurf
  }
)(SmurfsList);
