import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchSmurfs, createSmurf, updateSmurf, deleteSmurf } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  defaultSmurfs = () => {
    const eddieSmurphy = {
      id: 0,
      name: "Eddie Smurphy",
      age: 50,
      height: "short"
    };
    const eduardoSmurficius = {
      id: 1,
      name: "Eduardo Smurficius",
      age: 42,
      height: "shortish"
    };
    this.props.createSmurf(eddieSmurphy);
    this.props.createSmurf(eduardoSmurficius);
  };

  render() {
    return (
      <div className="App">
        <h1>Smurf List</h1>
        <button onClick={() => this.defaultSmurfs()}>
          Create default smurfs
        </button>
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
    fetchingSmurfs: state.fetchingSmurfs,
    creatingSmurf: state.creatingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf
  };
};

export default connect(mapStateToProps, {
  fetchSmurfs,
  createSmurf,
  updateSmurf,
  deleteSmurf
})(App);
