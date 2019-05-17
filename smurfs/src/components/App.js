import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import logo from '../logo.svg';
import Smurfs from './smurfs';
import SmurfForm from './smurfForm';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">{`The Smurfs List`}</h1>
          <h3>Add to the village, plenty of spots available!</h3> </header>
          <div className="Flex-Container">
       
        {this.props.error ? <h3>Error Fetching Smurfs</h3> : null}
       
          {this.props.gettingSmurfs ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}<div className="form-container"> <SmurfForm /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return {
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    gettingSmurfs: smurfsReducer.gettingSmurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
