import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';
import '../styles/SmurfsList.css';

class SmurfsList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  removeSmurf = id => {
    this.props.deleteSmurf({
      id: id
    });
  };

  render() {
    return (
      <div className="smurfsList">
        {this.props.fetchingSmurfs ? (
          <h1 className="loading">Loading...</h1>
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
                  <br />
                  <button
                    className="deleteBtn"
                    onClick={() => this.removeSmurf(smurf.id)}
                  >
                    Delete
                  </button>
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
  getSmurfs,
  deleteSmurf
};

export default connect(mapStateToProps, actions)(SmurfsList);
