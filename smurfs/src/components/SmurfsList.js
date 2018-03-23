import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class SmurfsList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <div className="addSmurfForm" />
        {this.props.fetchingSmurfs ? (
          <h1>Loading...</h1>
        ) : (
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <li key={smurf.id}>
                  Name: {smurf.name}
                  <br />
                  Age: {smurf.age}
                  <br />
                  height: {smurf.height}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

const actions = {
  getSmurfs
};

export default connect(mapStateToProps, actions)(SmurfsList);
