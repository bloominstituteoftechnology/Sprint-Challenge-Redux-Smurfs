import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Smurf from './Smurf';
import { getSmurf } from '../actions/index';
import smurfReducer from '../reducers/smurfReducer';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurf()
  }

  render() {
    console.log(this.props.smurfs.smurfReducer)
    const { smurfs } = this.props.smurfs.smurfReducer
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {smurfs.map( smurf => <Smurf smurf={smurf} key={smurf} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs : state,
  fetchingSmurfs : state.fetchingSmurfs
})

export default connect(mapStateToProps,{ getSmurf })(App);
