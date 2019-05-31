import React, { Component } from 'react';
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import { getSmurf } from "../actions";
import { connect } from "react-redux";
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurf();
  }
  render() {
    return (
      <div className="App">
        <header className = "smurf-header">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <h1>Apply to Village</h1>
          <SmurfForm />      
        </header>
        {this.props.error ? <h3>Error Fetching Smurfs...</h3> : null}
        <div>
          {this.props.gettingSmurf ? (
            <img src="#" className="App-logo" alt="smurfin" />
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer, singleSmurfReducer } = state;
  return {
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    gettingSmurf: smurfsReducer.gettingSmurf,

  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(App);
