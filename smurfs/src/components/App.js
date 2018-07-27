import React, { Component } from 'react';
import './App.css';

import { fetchSmurfs } from '../actions/index';
import { connect } from 'react-redux';

import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs('http://localhost:3333/smurfs');
  }
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}

        <br />
        <div>My dope smurfs:</div>
        <br />

        {this.props.fetchingSmurfs ? (
          <div> loading . . . </div>
        ) :
          (
            <div>
              {this.props.smurfs.map(smurf => {
                return <div key={smurf.name}>Name: {smurf.name}, Age: {smurf.age}, Height: {smurf.height}</div>;
              })}
            </div>
        )}

        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return({
    fetching: state.fetching,
    fetched: state.fetched,
    error: state.error,
    smurfs: state.smurfs
  })
}

export default connect(mapStateToProps, {
  fetchSmurfs
})(App);