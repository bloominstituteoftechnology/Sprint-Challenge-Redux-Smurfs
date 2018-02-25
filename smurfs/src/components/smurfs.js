import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <ul>
        {this.props.smurfs.map(smurf => {
          return (
            <li key={smurf.id}>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
