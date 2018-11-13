import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import getSmurfs from '../actions/index';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <div>Here's some Smurfs!</div>
        <div className="App-intro">
        <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.name}>{smurf.name}</li>;
            })}
          </ul>
          <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.age}>{smurf.age}</li>;
            })}
          </ul>
          <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.height}>{smurf.height}</li>;
            })}
          </ul>
          <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.id}>{smurf.id}</li>;
            })}
          </ul>
        </div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
