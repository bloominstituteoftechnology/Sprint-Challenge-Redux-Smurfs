import React, { Component } from "react";
import "./App.css";
import { get, removeSmurf } from "../actions";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to our Village! </h1>
        <div>We hope you enjoy your stay!</div>

        <div className="page">
          <SmurfForm />
          <div className="smurfs">
            {this.props.smurfs.map(smurf => (
              <div className="smurf-card">
                <p>{smurf.name}</p>
                <p>Age: {smurf.age}</p>
                {console.log(smurf.id)}
                <p>Height: {smurf.height}</p>
                <button onClick={() => this.props.removeSmurf(smurf.id)}>So long!</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading
  };
};
export default connect(
  mapState,
  { get, removeSmurf }
)(App);
