import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchSmurfs, createSmurf, updateSmurf, deleteSmurf } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

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

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSmurf = smurf => {
    smurf.id = this.props.smurfs.length;
    this.props.createSmurf(smurf);
    this.setState({ name: "", age: "", height: "", smurfs: this.props.smurfs });
  };

  updateSmurf = smurf => {
    this.props.updateSmurf(smurf);
    this.setState({ name: "", age: "", height: "", smurfs: this.props.smurfs });
  };

  deleteSmurf = smurf => {
    this.props.deleteSmurf(smurf);
    this.setState({ smurfs: this.props.smurfs });
  };

  render() {
    return (
      <div className="App">
        <h1>Smurf List</h1>
        <button onClick={() => this.defaultSmurfs()}>
          Create default smurfs
        </button>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
              {smurf.name}
              {` `}
              <button onClick={() => this.updateSmurf(this.state)}>Edit</button>
              <button onClick={() => this.deleteSmurf(smurf)}>Delete</button>
            </div>
          );
        })}
        <div>
          <br />
          <input
            name="name"
            type="text"
            placeholder="Name..."
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />
          <input
            name="age"
            type="text"
            placeholder="Age..."
            value={this.state.age}
            onChange={this.handleInput}
          />
          <br />
          <input
            name="height"
            type="text"
            placeholder="Height..."
            value={this.state.height}
            onChange={this.handleInput}
          />
          <br />
          <button onClick={() => this.createSmurf(this.state)}>Submit</button>
        </div>
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
