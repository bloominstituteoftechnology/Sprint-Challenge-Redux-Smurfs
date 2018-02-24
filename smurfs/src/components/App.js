import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions";
import SmurfGen from "./SmurfGen";
import AddSmurfForm from "./AddSmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">
          SMURFS! 2.0 <AddSmurfForm save={this.props.addSmurf} />
        </h1>
        <div className="smurfDisplay">
          <SmurfGen smurfs={this.props.smurfs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);
