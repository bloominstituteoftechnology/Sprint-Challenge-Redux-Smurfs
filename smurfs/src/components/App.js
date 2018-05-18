import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";

class App extends Component {

  state = {
    smurf: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    // console.log(this.props)
    return <div className="App">
        <h1>SMURFS!</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return <div key={smurf.name}>{smurf.name}</div>;
          })}
        </ul>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.pending
  };
};
export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
