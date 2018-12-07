import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addSmurf, getSmurfs } from "../actions";
import SmurfForm from "./SmurfForm";

class App extends Component {
  state = {
    hidden: false
  };

  toggleForm = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    const { smurfs } = this.props;
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {smurfs.map(smurf => {
          return (
            <div className="smurf-card">
              <h2>{smurf.name}</h2>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
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
  { addSmurf, getSmurfs }
)(App);
