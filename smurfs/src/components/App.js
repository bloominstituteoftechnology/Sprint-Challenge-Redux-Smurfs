import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import './App.css';
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
        <h1>SMURFS!</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li key={smurf.id}>
                <div>Name: {smurf.name}</div>
                <div>Age: {smurf.age}</div>
                <div>Height: {smurf.height}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    smurfs: state.smurfs,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
