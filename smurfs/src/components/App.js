import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getSmurfs } from '../actions';

class App extends Component {
  
  componentDidMount() {
    this.props.getSmurfs()
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

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProps, { getSmurfs })(App);
