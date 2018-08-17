import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import SmurfsList from "./SmurfsList";
import AddSmurf from "./AddSmurf";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  addSmurf = smurf => {
    this.props.addSmurf(smurf);
  };

  murderSmurf = id => {
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to SmurfTown</h1>
        {this.props.fetchingSmurfs ? (
          <p> the smurfs b comin</p>
        ) : (
          <SmurfsList smurfs={this.props.smurfs} handleDelete={this.murderSmurf} />
        )}
        <p> Add Smurf? </p>
        <AddSmurf handleAddSmurf={this.addSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
