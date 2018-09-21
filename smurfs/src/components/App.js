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

   removeSmurf = id => {
    this.props.deleteSmurf(id);
  }

   render() {
    return (
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
        <p> Add Smurf </p>
        <AddSmurf handleAddSmurf={this.addSmurf} />
        {this.props.fetchingSmurfs ? (
          <p> Smurfs Loading </p>
        ) : (
          <SmurfsList smurfs={this.props.smurfs} handleDelete={this.removeSmurf} />
        )}
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
