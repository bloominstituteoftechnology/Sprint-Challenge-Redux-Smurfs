import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSmurf, getSmurfs, updateSmurf, deleteSmurf } from '../actions'
import './App.css'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const mapStateToProps = ({
  smurfs,
  fetchingSmurfs,
  addingSmurf,
  updatingSmurf,
  deletingSmurf,
  error
}) => ({
  smurfs,
  fetchingSmurfs,
  addingSmurf,
  updatingSmurf,
  deletingSmurf,
  error
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs, updateSmurf, deleteSmurf }
)(App)
