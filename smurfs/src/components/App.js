import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import Smurfs from "./Smurfs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
      </div>
    );
  }
}

export default App;
