import React, { Component } from "react";
import "./App.css";
import SmurfVillage from "./SmurfVillage";
import Form from "./Form";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        <hr />
        <Form />
        <SmurfVillage {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
