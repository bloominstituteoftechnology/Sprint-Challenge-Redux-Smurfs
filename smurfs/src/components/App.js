import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs, editSmurf } from "../actions";
import SmurfForm from "./SmurfForm";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleClick = ev => {
    ev.preventDefault();
    console.log("Button clicked");
    this.props.editSmurf(this.state.inputText);
  };

  render() {
    return (
      <div className="App">
        <SmurfForm />
        {this.props.smurfs.map((smurf, index) => {
          return (
            <div key={index}>
              <h2>{smurf.name}</h2>
              <form onSubmit={this.handleClick} />
              <input
                type="text"
                name="inputText"
                onChange={this.handleChanges}
                placeholder="Edit Name"
                value={this.state.inputText}
              />
              <button type="onSubmit">Update Smurf</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, editSmurf }
)(App);
