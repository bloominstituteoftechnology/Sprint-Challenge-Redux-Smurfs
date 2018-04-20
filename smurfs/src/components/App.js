import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchSmurfs, createSmurf } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>Smurf List</h1>
        {this.props.smurfs.map(smurf => {
          return <div key={smurf.id}>{smurf.name}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
