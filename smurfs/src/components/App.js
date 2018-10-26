import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
// import { smurfsReducer } from '../reducers';


import './App.css';
import { SmurfsList } from './SmurfsList';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if(this.props.fetchingSmurfs) {
      console.log('fetching')
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Have fun!</div>
        <br />
        <SmurfsList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('the state', state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);