import React, { Component } from 'react';
import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'
import { fetchSmurf } from '../actions'
import { connect } from 'react-redux'
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurf()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <hr />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    postingSmurf: state.postingSmurf,
    deletingSmurf: state.deletingSmurf,
    updatingSmurf: state.updatingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchSmurf})(App)
