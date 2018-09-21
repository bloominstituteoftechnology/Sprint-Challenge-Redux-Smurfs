/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions'
import Smurfs from './Smurfs'
import AddSmurfForm from './AddSmurfForm'

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        { this.props.fetchingSmurfs ? <h2>Loading...</h2> : <Smurfs smurfs={this.props.smurfs} /> }
        <AddSmurfForm addSmurf={this.props.addSmurf}/>
      </div>
    )
  }
}

const mapStateToProps = (state, action) => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
})

const mapDispatchToProps = {
  getSmurfs,
  addSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

