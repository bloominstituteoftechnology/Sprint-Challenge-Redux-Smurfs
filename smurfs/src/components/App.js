import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import { getSmurfs } from '../actions';

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
        
        {this.props.error ? <h3>Error Getting Smurfs</h3> : null}
        <div>
        {this.props.gettingSmurfs ? (
            <p>Getting Smurfs...</p>
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
        )}
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
    gettingSmurfs: smurfsReducer.gettingSmurfs,
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
