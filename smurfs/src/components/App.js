import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, createSmurfs, deleteSmurfs } from "../actions/";
import "./App.css";
import CreateSmurfForm from "./CreateSmurfForm";
import Smurfs from "./Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  // fetch data when App mounts
  componentDidMount() {
    this.props.getSmurfs();
  }
  // update state with new smurf data
  handleNewInput = event => {
    this.setState({ [event.target.name]: [event.target.value] });
  };
  // create new smurf
  handleCreateSmurf = () => {
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.createSmurfs(smurf);
    this.setState({ name: "", age: "", height: "" });
  };
  // delete a smurf
  handleDeleteSmurf = id => {
    this.props.deleteSmurfs(id);
  };
  render() {
    return [
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>,
      <CreateSmurfForm
        handleNewInput={this.handleNewInput}
        handleCreateSmurf={this.handleCreateSmurf}
      />,
      <Smurfs
        smurfs={this.props.smurfs}
        delete={this.props.handleDeleteSmurf}
      />
    ];
  }
}

const mapStateToProps = state => {
  // console.log("state: ", state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurfs: state.deletingSmurfs
  };
};

export default connect(mapStateToProps, {
  getSmurfs,
  createSmurfs,
  deleteSmurfs
})(App);
