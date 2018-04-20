import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';




/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="container">Welcome to your Redux version of Smurfs!
          <Smurfs />
          <SmurfForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
