import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from '../actions';
import './App.css';
import { SmurfCard } from './SmurfCard';
import { SmurfForm } from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}


// Set all state derived from redux onto props of our App componenet
export default connect(mapStateToProps, mapDispatchToProps())(App);
