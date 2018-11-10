import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import SmurfList from "./SmurfsList";
import Form from "./Form";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  handleAddSmurf = ({ name, age, height }, e) => {
    e.preventDefault();
    this.props.addSmurf({ name, age, height });
  };

  handleDeleteSmurf = id => {
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        <Form handleAddSmurf={this.handleAddSmurf} />
        {this.props.fetchingSmurfs ? (
          <div>Loading...</div>
        ) : (
          <SmurfList
            smurfs={this.props.smurfs}
            handleDeleteSmurf={this.handleDeleteSmurf}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
    // state: state
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
