import React, { Component } from "react";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <h2>{smurf.name}</h2>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    error: state.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);
