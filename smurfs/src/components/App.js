import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';
// import smurfActions from '../actions';
import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
