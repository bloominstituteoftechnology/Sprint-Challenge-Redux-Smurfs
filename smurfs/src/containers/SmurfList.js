import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfsRequest } from '../actions';

class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfsRequest();
  }

  render() {
    const { smurfs } = this.props;
    return (
      <div>
        {smurfs.map(smurf => (
          <div key={smurf.name}>
            <h3>{smurf.name}</h3>
            <p>{smurf.height}</p>
            <p>{smurf.age}</p>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ smurfs, isFetching }) {
  return {
    smurfs,
    isFetching,
  };
}

export default connect(
  mapStateToProps,
  { fetchSmurfsRequest },
)(SmurfList);
