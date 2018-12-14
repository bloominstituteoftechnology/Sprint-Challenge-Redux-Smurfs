import React, { Component } from 'react';
import { connect } from "react-redux";
import SmurfList from "./SmurfList";
import Form from "./Form";
import { addSmurf } from "../actions";
import './App.css';
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
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
          <SmurfList />
        <div>
          <Form submit={this.props.addSmurf} />
        </div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default connect(null, {addSmurf})(App);
