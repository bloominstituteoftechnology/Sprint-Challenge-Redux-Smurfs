import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetched } from '../actions'
import SmurfList from './SmurfList'
import SmurfClass from './SmurfForm'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetched();
  }
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfClass />
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: null
  }
}

export default connect(mapStateToProps, { fetched })(App);
