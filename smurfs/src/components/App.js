import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import Smurfs from "./Smurfs";
import NewSmurf from "./NewSmurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
        <NewSmurf />
      </div>
    );
  }
}

export default App;
